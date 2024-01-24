package com.linkedin.metadata.resources.entity;

import static com.linkedin.metadata.service.RollbackService.ROLLBACK_FAILED_STATUS;

import com.codahale.metrics.MetricRegistry;
import com.datahub.authentication.Authentication;
import com.datahub.authentication.AuthenticationContext;
import com.datahub.authentication.AuthenticationException;
import com.datahub.plugins.auth.authorization.Authorizer;
import com.linkedin.common.urn.Urn;
import com.linkedin.common.urn.UrnUtils;
import com.linkedin.entity.EnvelopedAspect;
import com.linkedin.metadata.aspect.VersionedAspect;
import com.linkedin.metadata.entity.EntityService;
import com.linkedin.metadata.restli.RestliUtil;
import com.linkedin.metadata.run.AspectRowSummary;
import com.linkedin.metadata.run.AspectRowSummaryArray;
import com.linkedin.metadata.run.IngestionRunSummary;
import com.linkedin.metadata.run.IngestionRunSummaryArray;
import com.linkedin.metadata.run.RollbackResponse;
import com.linkedin.metadata.service.RollbackService;
import com.linkedin.metadata.systemmetadata.SystemMetadataService;
import com.linkedin.parseq.Task;
import com.linkedin.restli.common.HttpStatus;
import com.linkedin.restli.server.RestLiServiceException;
import com.linkedin.restli.server.annotations.Action;
import com.linkedin.restli.server.annotations.ActionParam;
import com.linkedin.restli.server.annotations.Optional;
import com.linkedin.restli.server.annotations.RestLiCollection;
import com.linkedin.restli.server.resources.CollectionResourceTaskTemplate;
import io.opentelemetry.extension.annotations.WithSpan;
import java.util.List;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import javax.inject.Inject;
import javax.inject.Named;
import lombok.extern.slf4j.Slf4j;

/** resource for showing information and rolling back runs */
@Slf4j
@RestLiCollection(name = "runs", namespace = "com.linkedin.entity")
public class BatchIngestionRunResource
    extends CollectionResourceTaskTemplate<String, VersionedAspect> {

  private static final Integer DEFAULT_OFFSET = 0;
  private static final Integer DEFAULT_PAGE_SIZE = 100;
  private static final boolean DEFAULT_INCLUDE_SOFT_DELETED = false;
  private static final boolean DEFAULT_HARD_DELETE = false;

  @Inject
  @Named("systemMetadataService")
  private SystemMetadataService _systemMetadataService;

  @Inject
  @Named("entityService")
  private EntityService<?> _entityService;

  @Inject
  @Named("rollbackService")
  private RollbackService rollbackService;

    @Inject
    @Named("authorizerChain")
    private Authorizer _authorizer;

  /** Rolls back an ingestion run */
  @Action(name = "rollback")
  @Nonnull
  @WithSpan
  public Task<RollbackResponse> rollback(
      @ActionParam("runId") @Nonnull String runId,
      @ActionParam("dryRun") @Optional Boolean dryRun,
      @Deprecated @ActionParam("hardDelete") @Optional Boolean hardDelete,
      @ActionParam("safe") @Optional Boolean safe)
      throws Exception {
    log.info("ROLLBACK RUN runId: {} dry run: {}", runId, dryRun);

    boolean doHardDelete =
        safe != null ? !safe : hardDelete != null ? hardDelete : DEFAULT_HARD_DELETE;

    if (safe != null && hardDelete != null) {
      log.warn(
          "Both Safe & hardDelete flags were defined, honouring safe flag as hardDelete is deprecated");
    }
    try {
      return RestliUtil.toTask(
          () -> {

              Authentication auth = AuthenticationContext.getAuthentication();
              try {
                  return rollbackService.rollbackIngestion(runId, dryRun, doHardDelete, _authorizer, auth);
              } catch (AuthenticationException authException) {
                  throw new RestLiServiceException(
                          HttpStatus.S_401_UNAUTHORIZED, authException.getMessage());
              }
          },
          MetricRegistry.name(this.getClass(), "rollback"));
    } catch (Exception e) {
      rollbackService.updateExecutionRequestStatus(runId, ROLLBACK_FAILED_STATUS);
      throw new RuntimeException(
          String.format("There was an issue rolling back ingestion run with runId %s", runId), e);
    }
  }

  /** Retrieves the value for an entity that is made up of latest versions of specified aspects. */
  @Action(name = "list")
  @Nonnull
  @WithSpan
  public Task<IngestionRunSummaryArray> list(
      @ActionParam("pageOffset") @Optional @Nullable Integer pageOffset,
      @ActionParam("pageSize") @Optional @Nullable Integer pageSize,
      @ActionParam("includeSoft") @Optional @Nullable Boolean includeSoft) {
    log.info("LIST RUNS offset: {} size: {}", pageOffset, pageSize);

    return RestliUtil.toTask(
        () -> {
          List<IngestionRunSummary> summaries =
              _systemMetadataService.listRuns(
                  pageOffset != null ? pageOffset : DEFAULT_OFFSET,
                  pageSize != null ? pageSize : DEFAULT_PAGE_SIZE,
                  includeSoft != null ? includeSoft : DEFAULT_INCLUDE_SOFT_DELETED);

          return new IngestionRunSummaryArray(summaries);
        },
        MetricRegistry.name(this.getClass(), "list"));
  }

  @Action(name = "describe")
  @Nonnull
  @WithSpan
  public Task<AspectRowSummaryArray> describe(
      @ActionParam("runId") @Nonnull String runId,
      @ActionParam("start") Integer start,
      @ActionParam("count") Integer count,
      @ActionParam("includeSoft") @Optional @Nullable Boolean includeSoft,
      @ActionParam("includeAspect") @Optional @Nullable Boolean includeAspect) {
    log.info("DESCRIBE RUN runId: {}, start: {}, count: {}", runId, start, count);

    return RestliUtil.toTask(
        () -> {
          List<AspectRowSummary> summaries =
              _systemMetadataService.findByRunId(
                  runId, includeSoft != null && includeSoft, start, count);

          if (includeAspect != null && includeAspect) {
            summaries.forEach(
                summary -> {
                  Urn urn = UrnUtils.getUrn(summary.getUrn());
                  try {
                    EnvelopedAspect aspect =
                        _entityService.getLatestEnvelopedAspect(
                            urn.getEntityType(), urn, summary.getAspectName());
                    if (aspect == null) {
                      log.error("Aspect for summary {} not found", summary);
                    } else {
                      summary.setAspect(aspect.getValue());
                    }
                  } catch (Exception e) {
                    log.error("Error while fetching aspect for summary {}", summary, e);
                  }
                });
          }
          return new AspectRowSummaryArray(summaries);
        },
        MetricRegistry.name(this.getClass(), "describe"));
  }
}
