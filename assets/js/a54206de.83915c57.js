"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1402],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,u(u({ref:t},p),{},{components:r})):n.createElement(f,u({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var s=2;s<i;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6651:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),u=["components"],l={title:"Ruleauthors Rule Set",sidebar:"home_sidebar",keywords:["rules","ruleauthors"],permalink:"ruleauthors.html",toc:!0,folder:"documentation"},a=void 0,s={unversionedId:"rules/ruleauthors",id:"version-1.23.3/rules/ruleauthors",title:"Ruleauthors Rule Set",description:"The rule authors ruleset provides rules that ensures good practices when writing detekt rules.",source:"@site/versioned_docs/version-1.23.3/rules/ruleauthors.md",sourceDirName:"rules",slug:"/rules/ruleauthors",permalink:"/docs/1.23.3/rules/ruleauthors",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.3/rules/ruleauthors.md",tags:[],version:"1.23.3",frontMatter:{title:"Ruleauthors Rule Set",sidebar:"home_sidebar",keywords:["rules","ruleauthors"],permalink:"ruleauthors.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Potential-bugs Rule Set",permalink:"/docs/1.23.3/rules/potential-bugs"},next:{title:"Style Rule Set",permalink:"/docs/1.23.3/rules/style"}},p={},c=[{value:"UseEntityAtName",id:"useentityatname",level:3},{value:"ViolatesTypeResolutionRequirements",id:"violatestyperesolutionrequirements",level:3}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The rule authors ruleset provides rules that ensures good practices when writing detekt rules."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: The ",(0,i.kt)("inlineCode",{parentName:"strong"},"ruleauthors")," rule set is not included in the detekt-cli or Gradle plugin.")),(0,i.kt)("p",null,"To enable this rule set, add ",(0,i.kt)("inlineCode",{parentName:"p"},'detektPlugins "io.gitlab.arturbosch.detekt:detekt-rules-ruleauthors:$version"'),"\nto your Gradle ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," or reference the ",(0,i.kt)("inlineCode",{parentName:"p"},"detekt-rules-ruleauthors"),"-jar with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--plugins")," option\nin the command line interface."),(0,i.kt)("h3",{id:"useentityatname"},"UseEntityAtName"),(0,i.kt)("p",null,"If a rule ","[report]","s issues using ","[Entity.from]"," with ","[KtNamedDeclaration.getNameIdentifier]",",\nthen it can be replaced with ","[Entity.atName]"," for more semantic code and better baseline support."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,i.kt)("h3",{id:"violatestyperesolutionrequirements"},"ViolatesTypeResolutionRequirements"),(0,i.kt)("p",null,"If a rule uses the property ","[BaseRule.bindingContext]"," should be annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@RequiresTypeResolution"),".\nAnd if the rule doesn't use that property it shouldn't be annotated with it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Debt"),": 5min"))}m.isMDXComponent=!0}}]);