"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4780],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=c(a),p=n,d=l["".concat(u,".").concat(p)]||l[p]||m[p]||o;return a?r.createElement(d,s(s({ref:t},b),{},{components:a})):r.createElement(d,s({ref:t},b))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},1742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"MXE Processing Jobs",slug:"/metadata-jobs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/README.md"},s="MXE Processing Jobs",i={unversionedId:"metadata-jobs/README",id:"metadata-jobs/README",title:"MXE Processing Jobs",description:"DataHub uses Kafka as the pub-sub message queue in the backend. There are 2 Kafka topics used by DataHub which are",source:"@site/genDocs/metadata-jobs/README.md",sourceDirName:"metadata-jobs",slug:"/metadata-jobs",permalink:"/docs/metadata-jobs",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/README.md",tags:[],version:"current",frontMatter:{title:"MXE Processing Jobs",slug:"/metadata-jobs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/README.md"}},u={},c=[],b={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mxe-processing-jobs"},"MXE Processing Jobs"),(0,n.kt)("p",null,"DataHub uses Kafka as the pub-sub message queue in the backend. There are 2 Kafka topics used by DataHub which are\n",(0,n.kt)("inlineCode",{parentName:"p"},"MetadataChangeEvent")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"MetadataAuditEvent"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MetadataChangeEvent:")," This message is emitted by any data platform or crawler in which there is a change in the metadata."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MetadataAuditEvent:")," This message is emitted by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/gms"},"DataHub GMS")," to notify that metadata change is registered.")),(0,n.kt)("p",null,"To be able to consume from these two topics, there are two ",(0,n.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/streams/"},"Kafka Streams"),"\njobs DataHub uses:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mce-consumer-job"},"MCE Consumer Job"),": Writes to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/gms"},"DataHub GMS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job"},"MAE Consumer Job"),": Writes to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/docker/elasticsearch"},"Elasticsearch")," & ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/docker/neo4j"},"Neo4j"))))}m.isMDXComponent=!0}}]);