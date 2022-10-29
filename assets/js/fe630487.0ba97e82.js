"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Working With Platform Instances",slug:"/platform-instances",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/platform-instances.md"},i="Working With Platform Instances",s={unversionedId:"docs/platform-instances",id:"docs/platform-instances",title:"Working With Platform Instances",description:"DataHub's metadata model for Datasets supports a three-part key currently:",source:"@site/genDocs/docs/platform-instances.md",sourceDirName:"docs",slug:"/platform-instances",permalink:"/docs/platform-instances",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/platform-instances.md",tags:[],version:"current",frontMatter:{title:"Working With Platform Instances",slug:"/platform-instances",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/platform-instances.md"},sidebar:"overviewSidebar",previous:{title:"Using Kubernetes",permalink:"/docs/metadata-ingestion/schedule_docs/kubernetes"},next:{title:"Stateful Ingestion",permalink:"/docs/metadata-ingestion/docs/dev_guides/stateful"}},l={},c=[{value:"Naming Platform Instances",id:"naming-platform-instances",level:2},{value:"Enabling Platform Instances",id:"enabling-platform-instances",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-platform-instances"},"Working With Platform Instances"),(0,r.kt)("p",null,"DataHub's metadata model for Datasets supports a three-part key currently: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data Platform (e.g. urn:li:dataPlatform:mysql)"),(0,r.kt)("li",{parentName:"ul"},"Name (e.g. db.schema.name)"),(0,r.kt)("li",{parentName:"ul"},"Env or Fabric (e.g. DEV, PROD, etc.)")),(0,r.kt)("p",null,"This naming scheme unfortunately does not allow for easy representation of the multiplicity of platforms (or technologies) that might be deployed at an organization within the same environment or fabric. For example, an organization might have multiple Redshift instances in Production and would want to see all the data assets located in those instances inside the DataHub metadata repository. "),(0,r.kt)("p",null,"As part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.8.24+")," releases, we are unlocking the first phase of supporting Platform Instances in the metadata model. This is done via two main additions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"dataPlatformInstance")," aspect that has been added to Datasets which allows datasets to be associated to an instance of a platform"),(0,r.kt)("li",{parentName:"ul"},"Enhancements to all ingestion sources that allow them to attach a platform instance to the recipe that changes the generated urns to go from ",(0,r.kt)("inlineCode",{parentName:"li"},"urn:li:dataset:(urn:li:dataPlatform:<platform>,<name>,ENV)")," format to ",(0,r.kt)("inlineCode",{parentName:"li"},"urn:li:dataset:(urn:li:dataPlatform:<platform>,<instance.name>,ENV)")," format. Sources that produce lineage to datasets in other platforms (e.g. Looker, Superset etc) also have specific configuration additions that allow the recipe author to specify the mapping between a platform and the instance name that it should be mapped to. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"./imgs/platform-instances-for-ingestion.png",src:n(79112).Z,width:"1533",height:"528"})),(0,r.kt)("h2",{id:"naming-platform-instances"},"Naming Platform Instances"),(0,r.kt)("p",null,"When configuring a platform instance, choose an instance name that is understandable and will be stable for the foreseeable future. e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"core_warehouse")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"finance_redshift")," are allowed names, as are pure guids like ",(0,r.kt)("inlineCode",{parentName:"p"},"a37dc708-c512-4fe4-9829-401cd60ed789"),". Remember that whatever instance name you choose, you will need to specify it in more than one recipe to ensure that the identifiers produced by different sources will line up."),(0,r.kt)("h2",{id:"enabling-platform-instances"},"Enabling Platform Instances"),(0,r.kt)("p",null,"Read the Ingestion source specific guides for how to enable platform instances in each of them.\nThe general pattern is to add an additional optional configuration parameter called ",(0,r.kt)("inlineCode",{parentName:"p"},"platform_instance"),". "),(0,r.kt)("p",null,"e.g. here is how you would configure a recipe to ingest a mysql instance that you want to call ",(0,r.kt)("inlineCode",{parentName:"p"},"core_finance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: mysql\n  config:\n    # Coordinates\n    host_port: localhost:3306\n    platform_instance: core_finance\n    database: dbname\n    \n    # Credentials\n    username: root\n    password: example\n\nsink:\n  # sink configs\n")),(0,r.kt)("h2",{id:""}))}m.isMDXComponent=!0},79112:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/platform-instances-for-ingestion-6c622b870d5a61f6f2a3efc86f021bc3.png"}}]);