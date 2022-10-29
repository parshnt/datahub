"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const o={title:"Overview",slug:"/authentication/guides/sso/configure-oidc-react",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react.md"},r="Overview",l={unversionedId:"docs/authentication/guides/sso/configure-oidc-react",id:"docs/authentication/guides/sso/configure-oidc-react",title:"Overview",description:"The DataHub React application supports OIDC authentication built on top of the Pac4j Play library.",source:"@site/genDocs/docs/authentication/guides/sso/configure-oidc-react.md",sourceDirName:"docs/authentication/guides/sso",slug:"/authentication/guides/sso/configure-oidc-react",permalink:"/docs/authentication/guides/sso/configure-oidc-react",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/authentication/guides/sso/configure-oidc-react",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react.md"},sidebar:"overviewSidebar",previous:{title:"JaaS Authentication",permalink:"/docs/authentication/guides/jaas"},next:{title:"Configuring Google Authentication for React App (OIDC)",permalink:"/docs/authentication/guides/sso/configure-oidc-react-google"}},s={},u=[{value:"Provider-Specific Guides",id:"provider-specific-guides",level:2},{value:"Configuring OIDC in React",id:"configuring-oidc-in-react",level:2},{value:"1. Register an app with your Identity Provider",id:"1-register-an-app-with-your-identity-provider",level:3},{value:"2. Configure DataHub Frontend Server",id:"2-configure-datahub-frontend-server",level:3},{value:"Advanced",id:"advanced",level:4},{value:"User &amp; Group Provisioning (JIT Provisioning)",id:"user--group-provisioning-jit-provisioning",level:5},{value:"Summary",id:"summary",level:3},{value:"Root user",id:"root-user",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The DataHub React application supports OIDC authentication built on top of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pac4j/play-pac4j"},"Pac4j Play")," library.\nThis enables operators of DataHub to integrate with 3rd party identity providers like Okta, Google, Keycloak, & more to authenticate their users."),(0,a.kt)("p",null,"When configured, OIDC auth will be enabled between clients of the DataHub UI & ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend"),' server. Beyond this point is considered\nto be a secure environment and as such authentication is validated & enforced only at the "front door" inside datahub-frontend.'),(0,a.kt)("h2",{id:"provider-specific-guides"},"Provider-Specific Guides"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/authentication/guides/sso/configure-oidc-react-google"},"Configuring OIDC using Google")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/authentication/guides/sso/configure-oidc-react-okta"},"Configuring OIDC using Okta")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/authentication/guides/sso/configure-oidc-react-azure"},"Configuring OIDC using Azure"))),(0,a.kt)("h2",{id:"configuring-oidc-in-react"},"Configuring OIDC in React"),(0,a.kt)("h3",{id:"1-register-an-app-with-your-identity-provider"},"1. Register an app with your Identity Provider"),(0,a.kt)("p",null,"To configure OIDC in React, you will most often need to register yourself as a client with your identity provider (Google, Okta, etc). Each provider may\nhave their own instructions. Provided below are links to examples for Okta, Google, Azure AD, & Keycloak."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.okta.com/docs/guides/add-an-external-idp/apple/register-app-in-okta/"},"Registering an App in Okta")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2/openid-connect"},"OpenID Connect in Google Identity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/auth-oidc"},"OpenID Connect authentication with Azure Active Directory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/securing_apps/"},"Keycloak - Securing Applications and Services Guide"))),(0,a.kt)("p",null,"During the registration process, you'll need to provide a login redirect URI to the identity provider. This tells the identity provider\nwhere to redirect to once they've authenticated the end user."),(0,a.kt)("p",null,"By default, the URL will be constructed as follows:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"',(0,a.kt)("a",{parentName:"p",href:"http://your-datahub-domain.com/callback/oidc%22"},'http://your-datahub-domain.com/callback/oidc"'))),(0,a.kt)("p",null,"For example, if you're hosted DataHub at ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub.myorg.com"),", this\nvalue would be ",(0,a.kt)("inlineCode",{parentName:"p"},"http://datahub.myorg.com/callback/oidc"),". For testing purposes you can also specify localhost as the domain name\ndirectly: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/callback/oidc")),(0,a.kt)("p",null,"The goal of this step should be to obtain the following values, which will need to be configured before deploying DataHub:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Client ID")," - A unique identifier for your application with the identity provider"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Client Secret")," - A shared secret to use for exchange between you and your identity provider"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Discovery URL")," - A URL where the OIDC API of your identity provider can be discovered. This should suffixed by\n",(0,a.kt)("inlineCode",{parentName:"li"},".well-known/openid-configuration"),". Sometimes, identity providers will not explicitly include this URL in their setup guides, though\nthis endpoint ",(0,a.kt)("em",{parentName:"li"},"will")," exist as per the OIDC specification. For more info see ",(0,a.kt)("a",{parentName:"li",href:"http://openid.net/specs/openid-connect-discovery-1_0.html"},"http://openid.net/specs/openid-connect-discovery-1_0.html"),".")),(0,a.kt)("h3",{id:"2-configure-datahub-frontend-server"},"2. Configure DataHub Frontend Server"),(0,a.kt)("p",null,"The second step to enabling OIDC involves configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," to enable OIDC authentication with your Identity Provider."),(0,a.kt)("p",null,"To do so, you must update the ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-frontend/env/docker.env"},"docker.env")," file with the\nvalues received from your identity provider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Required Configuration Values:\nAUTH_OIDC_ENABLED=true\nAUTH_OIDC_CLIENT_ID=your-client-id\nAUTH_OIDC_CLIENT_SECRET=your-client-secret\nAUTH_OIDC_DISCOVERY_URI=your-provider-discovery-url\nAUTH_OIDC_BASE_URL=your-datahub-url\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_ENABLED"),": Enable delegating authentication to OIDC identity provider"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_CLIENT_ID"),": Unique client id received from identity provider"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_CLIENT_SECRET"),": Unique client secret received from identity provider"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_DISCOVERY_URI"),": Location of the identity provider OIDC discovery API. Suffixed with ",(0,a.kt)("inlineCode",{parentName:"li"},".well-known/openid-configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_BASE_URL"),": The base URL of your DataHub deployment, e.g. ",(0,a.kt)("a",{parentName:"li",href:"https://yourorgdatahub.com"},"https://yourorgdatahub.com")," (prod) or http://localhost:9002 (testing)")),(0,a.kt)("p",null,'Providing these configs will cause DataHub to delegate authentication to your identity\nprovider, requesting the "oidc email profile" scopes and parsing the "preferred_username" claim from\nthe authenticated profile as the DataHub CorpUser identity.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By default, the login callback endpoint exposed by DataHub will be located at ",(0,a.kt)("inlineCode",{parentName:"p"},"${AUTH_OIDC_BASE_URL}/callback/oidc"),". This must ",(0,a.kt)("strong",{parentName:"p"},"exactly")," match the login redirect URL you've registered with your identity provider in step 1.")),(0,a.kt)("p",null,"In kubernetes, you can add the above env variables in the values.yaml as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'datahub-frontend:\n  ...\n  extraEnvs:\n    - name: AUTH_OIDC_ENABLED\n      value: "true"\n    - name: AUTH_OIDC_CLIENT_ID\n      value: your-client-id\n    - name: AUTH_OIDC_CLIENT_SECRET\n      value: your-client-secret\n    - name: AUTH_OIDC_DISCOVERY_URI\n      value: your-provider-discovery-url\n    - name: AUTH_OIDC_BASE_URL\n      value: your-datahub-url\n')),(0,a.kt)("p",null,"You can also package OIDC client secrets into a k8s secret by running"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create secret generic datahub-oidc-secret --from-literal=secret=<<OIDC SECRET>>")),(0,a.kt)("p",null,"Then set the secret env as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"    - name: AUTH_OIDC_CLIENT_SECRET\n      valueFrom:\n        secretKeyRef:\n          name: datahub-oidc-secret\n          key: secret\n")),(0,a.kt)("h4",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"You can optionally customize the flow further using advanced configurations. These allow\nyou to specify the OIDC scopes requested, how the DataHub username is parsed from the claims returned by the identity provider, and how users and groups are extracted and provisioned from the OIDC claim set."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Optional Configuration Values:\nAUTH_OIDC_USER_NAME_CLAIM=your-custom-claim\nAUTH_OIDC_USER_NAME_CLAIM_REGEX=your-custom-regex\nAUTH_OIDC_SCOPE=your-custom-scope\nAUTH_OIDC_CLIENT_AUTHENTICATION_METHOD=authentication-method\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_USER_NAME_CLAIM"),': The attribute that will contain the username used on the DataHub platform. By default, this is "preferred_username" provided\nas part of the standard ',(0,a.kt)("inlineCode",{parentName:"li"},"profile")," scope."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_USER_NAME_CLAIM_REGEX"),": A regex string used for extracting the username from the userNameClaim attribute. For example, if\nthe userNameClaim field will contain an email address, and we want to omit the domain name suffix of the email, we can specify a custom\nregex to do so. (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"([^@]+)"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_SCOPE"),": a string representing the scopes to be requested from the identity provider, granted by the end user. For more info,\nsee ",(0,a.kt)("a",{parentName:"li",href:"https://auth0.com/docs/scopes/openid-connect-scopes"},"OpenID Connect Scopes"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_CLIENT_AUTHENTICATION_METHOD"),": a string representing the token authentication method to use with the identity provider. Default value\nis ",(0,a.kt)("inlineCode",{parentName:"li"},"client_secret_basic"),", which uses HTTP Basic authentication. Another option is ",(0,a.kt)("inlineCode",{parentName:"li"},"client_secret_post"),", which includes the client_id and secret_id\nas form parameters in the HTTP POST request. For more info, see ",(0,a.kt)("a",{parentName:"li",href:"https://darutk.medium.com/oauth-2-0-client-authentication-4b5f929305d4"},"OAuth 2.0 Client Authentication"))),(0,a.kt)("h5",{id:"user--group-provisioning-jit-provisioning"},"User & Group Provisioning (JIT Provisioning)"),(0,a.kt)("p",null,"By default, DataHub will optimistically attempt to provision users and groups that do not already exist at the time of login.\nFor users, we extract information like first name, last name, display name, & email to construct a basic user profile. If a groups claim is present,\nwe simply extract their names."),(0,a.kt)("p",null,"The default provisioning behavior can be customized using the following configs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# User and groups provisioning\nAUTH_OIDC_JIT_PROVISIONING_ENABLED=true\nAUTH_OIDC_PRE_PROVISIONING_REQUIRED=false\nAUTH_OIDC_EXTRACT_GROUPS_ENABLED=false\nAUTH_OIDC_GROUPS_CLAIM=<your-groups-claim-name>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_JIT_PROVISIONING_ENABLED"),": Whether DataHub users & groups should be provisioned on login if they do not exist. Defaults to true."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_PRE_PROVISIONING_REQUIRED"),": Whether the user should already exist in DataHub when they login, failing login if they are not. This is appropriate for situations in which users and groups are batch ingested and tightly controlled inside your environment. Defaults to false."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_EXTRACT_GROUPS_ENABLED"),": Only applies if ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_JIT_PROVISIONING_ENABLED")," is set to true. This determines whether we should attempt to extract a list of group names from a particular claim in the OIDC attributes. Note that if this is enabled, each login will re-sync group membership with the groups in your Identity Provider, clearing the group membership that has been assigned through the DataHub UI. Enable with care! Defaults to false."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_GROUPS_CLAIM"),": Only applies if ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_EXTRACT_GROUPS_ENABLED")," is set to true. This determines which OIDC claims will contain a list of string group names. Accepts multiple claim names with comma-separated values. I.e: ",(0,a.kt)("inlineCode",{parentName:"li"},"groups, teams, departments"),". Defaults to 'groups'.")),(0,a.kt)("p",null,"Once configuration has been updated, ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," will need to be restarted to pick up the new environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml  up datahub-frontend-react\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that by default, enabling OIDC will ",(0,a.kt)("em",{parentName:"p"},"not")," disable the dummy JAAS authentication path, which can be reached at the ",(0,a.kt)("inlineCode",{parentName:"p"},"/login"),"\nroute of the React app. To disable this authentication path, additionally specify the following config:\n",(0,a.kt)("inlineCode",{parentName:"p"},"AUTH_JAAS_ENABLED=false"))),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Once configured, deploying the ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container will enable an indirect authentication flow in which DataHub delegates\nauthentication to the specified identity provider."),(0,a.kt)("p",null,"Once a user is authenticated by the identity provider, DataHub will extract a username from the provided claims\nand grant DataHub access to the user by setting a pair of session cookies."),(0,a.kt)("p",null,"A brief summary of the steps that occur when the user navigates to the React app are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"/authenticate")," endpoint in ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub-frontend")," server is initiated"),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"/authenticate")," attempts to authenticate the request via session cookies"),(0,a.kt)("li",{parentName:"ol"},"If auth fails, the server issues a redirect to the Identity Provider's login experience"),(0,a.kt)("li",{parentName:"ol"},"The user logs in with the Identity Provider"),(0,a.kt)("li",{parentName:"ol"},"The Identity Provider authenticates the user and redirects back to DataHub's registered login redirect URL, providing an authorization code which\ncan be used to retrieve information on behalf of the authenticated user"),(0,a.kt)("li",{parentName:"ol"},"DataHub fetches the authenticated user's profile and extracts a username to identify the user on DataHub (eg. urn:li:corpuser:username)"),(0,a.kt)("li",{parentName:"ol"},"DataHub sets session cookies for the newly authenticated user"),(0,a.kt)("li",{parentName:"ol"},'DataHub redirects the user to the homepage ("/")')),(0,a.kt)("h3",{id:"root-user"},"Root user"),(0,a.kt)("p",null,"Even if OIDC is configured the root user can still login without OIDC by going\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," URL endpoint. It is recommended that you don't use the default\ncredentials by mounting a different file in the front end container. To do this\nplease see how to mount a custom user.props file for a JAAS authenticated deployment."))}d.isMDXComponent=!0}}]);