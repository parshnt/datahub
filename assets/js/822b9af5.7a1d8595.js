"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6448],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"Great Expectations",slug:"/metadata-ingestion/integration_docs/great-expectations",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/integration_docs/great-expectations.md"},o="Great Expectations",s={unversionedId:"metadata-ingestion/integration_docs/great-expectations",id:"metadata-ingestion/integration_docs/great-expectations",title:"Great Expectations",description:"This guide helps to setup and configure DataHubValidationAction in Great Expectations to send assertions(expectations) and their results to DataHub using DataHub's Python Rest emitter.",source:"@site/genDocs/metadata-ingestion/integration_docs/great-expectations.md",sourceDirName:"metadata-ingestion/integration_docs",slug:"/metadata-ingestion/integration_docs/great-expectations",permalink:"/docs/metadata-ingestion/integration_docs/great-expectations",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/integration_docs/great-expectations.md",tags:[],version:"current",frontMatter:{title:"Great Expectations",slug:"/metadata-ingestion/integration_docs/great-expectations",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/integration_docs/great-expectations.md"},sidebar:"overviewSidebar",previous:{title:"Spark",permalink:"/docs/metadata-integration/java/spark-lineage"},next:{title:"Protobuf Schemas",permalink:"/docs/metadata-integration/java/datahub-protobuf"}},l={},p=[{value:"Capabilities",id:"capabilities",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Setting up",id:"setting-up",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Learn more",id:"learn-more",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"great-expectations"},"Great Expectations"),(0,i.kt)("p",null,"This guide helps to setup and configure ",(0,i.kt)("inlineCode",{parentName:"p"},"DataHubValidationAction")," in Great Expectations to send assertions(expectations) and their results to DataHub using DataHub's Python Rest emitter."),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DataHubValidationAction")," pushes assertions metadata to DataHub. This includes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Assertion Details"),": Details of assertions (i.e. expectation) set on a Dataset (Table). "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Assertion Results"),": Evaluation results for an assertion tracked over time. ")),(0,i.kt)("p",null,"This integration supports v3 api datasources using SqlAlchemyExecutionEngine. "),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"This integration does not support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"v2 Datasources such as SqlAlchemyDataset"),(0,i.kt)("li",{parentName:"ul"},"v3 Datasources using execution engine other than SqlAlchemyExecutionEngine (Spark, Pandas)"),(0,i.kt)("li",{parentName:"ul"},"Cross-dataset expectations (those involving > 1 table)")),(0,i.kt)("h2",{id:"setting-up"},"Setting up"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the required dependency in your Great Expectations environment.  ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[great-expectations]'\n")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"To add ",(0,i.kt)("inlineCode",{parentName:"li"},"DataHubValidationAction")," in Great Expectations Checkpoint, add following configuration in action_list for your Great Expectations ",(0,i.kt)("inlineCode",{parentName:"li"},"Checkpoint"),". For more details on setting action_list, see ",(0,i.kt)("a",{parentName:"li",href:"https://docs.greatexpectations.io/docs/reference/checkpoints_and_actions/"},"Checkpoints and Actions")," ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"action_list:\n  - name: datahub_action\n    action:\n      module_name: datahub.integrations.great_expectations.action\n      class_name: DataHubValidationAction\n      server_url: http://localhost:8080 #datahub server url\n")),(0,i.kt)("strong",{parentName:"li"},"Configuration options:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"server_url")," (required): URL of DataHub GMS endpoint"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"env"),' (optional, defaults to "PROD"): Environment to use in namespace when constructing dataset URNs.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exclude_dbname")," (optional): Exclude dbname / catalog when constructing dataset URNs. (Highly applicable to Trino / Presto where we want to omit catalog e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"hive"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platform_alias")," (optional): Platform alias when constructing dataset URNs. e.g. main data platform is ",(0,i.kt)("inlineCode",{parentName:"li"},"presto-on-hive")," but using ",(0,i.kt)("inlineCode",{parentName:"li"},"trino")," to run the test"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platform_instance_map")," (optional): Platform instance mapping to use when constructing dataset URNs. Maps the GE 'data source' name to a platform instance on DataHub. e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'platform_instance_map: { "datasource_name": "warehouse" }')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"graceful_exceptions")," (defaults to true): If set to true, most runtime errors in the lineage backend will be suppressed and will not cause the overall checkpoint to fail. Note that configuration issues will still throw exceptions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token")," (optional): Bearer token used for authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout_sec")," (optional): Per-HTTP request timeout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retry_status_codes")," (optional): Retry HTTP request also on these status codes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retry_max_times")," (optional): Maximum times to retry if HTTP request fails. The delay between retries is increased exponentially."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extra_headers")," (optional): Extra headers which will be added to the datahub request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parse_table_names_from_sql")," (defaults to false): The integration can use an SQL parser to try to parse the datasets being asserted. This parsing is disabled by default, but can be enabled by setting ",(0,i.kt)("inlineCode",{parentName:"li"},"parse_table_names_from_sql: True"),".  The parser is based on the ",(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/sqllineage/"},(0,i.kt)("inlineCode",{parentName:"a"},"sqllineage"))," package.")))),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Set environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"DATAHUB_DEBUG")," (default ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),") to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to enable debug logging for ",(0,i.kt)("inlineCode",{parentName:"p"},"DataHubValidationAction"),"."),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("p",null,"To see the Great Expectations in action, check out ",(0,i.kt)("a",{parentName:"p",href:"https://www.loom.com/share/d781c9f0b270477fb5d6b0c26ef7f22d"},"this demo")," from the Feb 2022 townhall."))}u.isMDXComponent=!0}}]);