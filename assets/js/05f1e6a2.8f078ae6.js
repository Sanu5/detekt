"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[661],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],l={id:"compose",title:"Configuration for Compose",keywords:["compose","config","configuration","jetpack-compose","rules"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:5},s=void 0,p={unversionedId:"introduction/compose",id:"version-1.22.0/introduction/compose",title:"Configuration for Compose",description:"Relevant rule sets and their configuration options for Compose styles & usage. The following are being used as reference for Compose usage:",source:"@site/versioned_docs/version-1.22.0/introduction/compose.md",sourceDirName:"introduction",slug:"/introduction/compose",permalink:"/docs/1.22.0/introduction/compose",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.22.0/introduction/compose.md",tags:[],version:"1.22.0",sidebarPosition:5,frontMatter:{id:"compose",title:"Configuration for Compose",keywords:["compose","config","configuration","jetpack-compose","rules"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Reporting",permalink:"/docs/1.22.0/introduction/reporting"},next:{title:"Suppressing Issues",permalink:"/docs/1.22.0/introduction/suppressing-rules"}},u={},m=[{value:"FunctionNaming",id:"functionnaming",level:3},{value:"Configurations:",id:"configurations",level:4},{value:"TopLevelPropertyNaming",id:"toplevelpropertynaming",level:3},{value:"Default Style:",id:"default-style",level:5},{value:"Compose Style:",id:"compose-style",level:5},{value:"Configurations:",id:"configurations-1",level:4},{value:"LongParameterList",id:"longparameterlist",level:3},{value:"Configurations:",id:"configurations-2",level:4},{value:"MagicNumber",id:"magicnumber",level:3},{value:"Configurations:",id:"configurations-3",level:4},{value:"UnusedPrivateMember",id:"unusedprivatemember",level:3},{value:"Configurations:",id:"configurations-4",level:4}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Relevant rule sets and their configuration options for Compose styles & usage. The following are being used as reference for Compose usage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/androidx/androidx/blob/androidx-main/compose/docs/compose-api-guidelines.md"},"Compose API Guidelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose"},"Compose source"))),(0,i.kt)("h3",{id:"functionnaming"},"FunctionNaming"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/naming#functionnaming"},"FunctionNaming"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Composable")," functions that return ",(0,i.kt)("inlineCode",{parentName:"p"},"Unit")," are named using ",(0,i.kt)("inlineCode",{parentName:"p"},"PascalCase"),". Detekt may see this as a violation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun FooButton(text: String, onClick: () -> Unit) { // Violation for FooButton()\n")),(0,i.kt)("h4",{id:"configurations"},"Configurations:"),(0,i.kt)("p",null,"Choose ",(0,i.kt)("em",{parentName:"p"},"either")," of the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Augment default ",(0,i.kt)("inlineCode",{parentName:"li"},"functionPattern")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"'[a-zA-Z][a-zA-Z0-9]*'")," (default is: ",(0,i.kt)("inlineCode",{parentName:"li"},"'[a-z][a-zA-Z0-9]*'"),")"),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"ignoreAnnotated")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"['Composable']"))),(0,i.kt)("h3",{id:"toplevelpropertynaming"},"TopLevelPropertyNaming"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/naming#toplevelpropertynaming"},"TopLevelPropertyNaming"),"."),(0,i.kt)("p",null,"Compose guidelines prescribe ",(0,i.kt)("inlineCode",{parentName:"p"},"CamelCase")," for top-level constants."),(0,i.kt)("h5",{id:"default-style"},"Default Style:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"private val FOO_PADDING = 16.dp\n")),(0,i.kt)("h5",{id:"compose-style"},"Compose Style:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"private val FooPadding = 16.dp\n")),(0,i.kt)("h4",{id:"configurations-1"},"Configurations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"constantPattern")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"'[A-Z][A-Za-z0-9]*'")," (default is: ",(0,i.kt)("inlineCode",{parentName:"li"},"'[A-Z][_A-Z0-9]*'"),")")),(0,i.kt)("h3",{id:"longparameterlist"},"LongParameterList"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/complexity#longparameterlist"},"LongParameterList"),"."),(0,i.kt)("p",null,"Composables may boast more than the typical number of function arguments (albeit mostly with default values). For example, see ",(0,i.kt)("a",{parentName:"p",href:"https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/material/material/src/commonMain/kotlin/androidx/compose/material/OutlinedTextField.kt;l=133?q=OutlinedTextFieldLayout&ss=androidx%2Fplatform%2Fframeworks%2Fsupport:compose%2F"},"OutlinedTextField"),"."),(0,i.kt)("h4",{id:"configurations-2"},"Configurations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"functionThreshold")," to a higher value"),(0,i.kt)("li",{parentName:"ul"},"Additionally, can set ",(0,i.kt)("inlineCode",{parentName:"li"},"ignoreDefaultParameters = true"))),(0,i.kt)("h3",{id:"magicnumber"},"MagicNumber"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/style#magicnumber"},"MagicNumber"),"."),(0,i.kt)("p",null,"Class/companion object/top-level properties that declare objects such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Color(0xFFEA6D7E)")," may be considered violations if they don't specify the named parameter (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"Color(color = 0xFFEA6D7E)"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val color1 = Color(0xFFEA6D7E) // Violation\n\nclass Foo {\n  val color2 = Color(0xFFEA6D7E) // Violation\n\n  companion object {\n    val color3 = Color(0xFFEA6D7E) // No violation if ignoreCompanionObjectPropertyDeclaration = true by default\n  }\n}\n")),(0,i.kt)("h4",{id:"configurations-3"},"Configurations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"ignorePropertyDeclaration = true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ignoreCompanionObjectPropertyDeclaration = true")," (default)")),(0,i.kt)("h3",{id:"unusedprivatemember"},"UnusedPrivateMember"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/style#unusedprivatemember"},"UnusedPrivateMember"),"."),(0,i.kt)("p",null,"Detekt may see composable preview functions, i.e. those marked with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Preview"),", as unused."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Preview\n@Composable\nprivate fun FooLazyColumnPreview() { // Violation for FooLazyColumnPreview()\n    FooLazyColumn()\n}\n")),(0,i.kt)("h4",{id:"configurations-4"},"Configurations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"ignoreAnnotated")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"['Preview']"))))}d.isMDXComponent=!0}}]);