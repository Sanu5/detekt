"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[6421],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1214:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),l=["components"],o={title:"Libraries Rule Set",sidebar:"home_sidebar",keywords:["rules","libraries"],permalink:"libraries.html",toc:!0,folder:"documentation"},s=void 0,p={unversionedId:"rules/libraries",id:"version-1.23.3/rules/libraries",title:"Libraries Rule Set",description:"Rules in this rule set report issues related to libraries API exposure.",source:"@site/versioned_docs/version-1.23.3/rules/libraries.md",sourceDirName:"rules",slug:"/rules/libraries",permalink:"/docs/1.23.3/rules/libraries",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.3/rules/libraries.md",tags:[],version:"1.23.3",frontMatter:{title:"Libraries Rule Set",sidebar:"home_sidebar",keywords:["rules","libraries"],permalink:"libraries.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Formatting Rule Set",permalink:"/docs/1.23.3/rules/formatting"},next:{title:"Naming Rule Set",permalink:"/docs/1.23.3/rules/naming"}},u={},c=[{value:"ForbiddenPublicDataClass",id:"forbiddenpublicdataclass",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"LibraryCodeMustSpecifyReturnType",id:"librarycodemustspecifyreturntype",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"LibraryEntitiesShouldNotBePublic",id:"libraryentitiesshouldnotbepublic",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rules in this rule set report issues related to libraries API exposure."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: The ",(0,a.kt)("inlineCode",{parentName:"strong"},"libraries")," rule set is not included in the detekt-cli or Gradle plugin.")),(0,a.kt)("p",null,"To enable this rule set, add ",(0,a.kt)("inlineCode",{parentName:"p"},'detektPlugins "io.gitlab.arturbosch.detekt:detekt-rules-libraries:$version"'),"\nto your Gradle ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," or reference the ",(0,a.kt)("inlineCode",{parentName:"p"},"detekt-rules-libraries"),"-jar with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--plugins")," option\nin the command line interface."),(0,a.kt)("h3",{id:"forbiddenpublicdataclass"},"ForbiddenPublicDataClass"),(0,a.kt)("p",null,"Data classes are bad for binary compatibility in public APIs. Avoid using them."),(0,a.kt)("p",null,"This rule is aimed at library maintainers. If you are developing a final application you can ignore this issue."),(0,a.kt)("p",null,"More info: ",(0,a.kt)("a",{parentName:"p",href:"https://jakewharton.com/public-api-challenges-in-kotlin/"},"Public API challenges in Kotlin")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.16.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,a.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ignorePackages")," (default: ",(0,a.kt)("inlineCode",{parentName:"p"},"['*.internal', '*.internal.*']"),")"),(0,a.kt)("p",{parentName:"li"},"ignores classes in the specified packages."))),(0,a.kt)("h4",{id:"noncompliant-code"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class C(val a: String) // violation: public data class\n")),(0,a.kt)("h4",{id:"compliant-code"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"internal data class C(val a: String)\n")),(0,a.kt)("h3",{id:"librarycodemustspecifyreturntype"},"LibraryCodeMustSpecifyReturnType"),(0,a.kt)("p",null,"Functions/properties exposed as public APIs of a library should have an explicit return type.\nInferred return type can easily be changed by mistake which may lead to breaking changes."),(0,a.kt)("p",null,"See also: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/whatsnew14.html#explicit-api-mode-for-library-authors"},"Kotlin 1.4 Explicit API")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.2.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,a.kt)("h4",{id:"configuration-options-1"},"Configuration options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"allowOmitUnit")," (default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,a.kt)("p",{parentName:"li"},"if functions with ",(0,a.kt)("inlineCode",{parentName:"p"},"Unit")," return type should be allowed without return type declaration"))),(0,a.kt)("h4",{id:"noncompliant-code-1"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// code from a library\nval strs = listOf("foo, bar")\nfun bar() = 5\nclass Parser {\n    fun parse() = ...\n}\n')),(0,a.kt)("h4",{id:"compliant-code-1"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// code from a library\nval strs: List<String> = listOf("foo, bar")\nfun bar(): Int = 5\n\nclass Parser {\n    fun parse(): ParsingResult = ...\n}\n')),(0,a.kt)("h3",{id:"libraryentitiesshouldnotbepublic"},"LibraryEntitiesShouldNotBePublic"),(0,a.kt)("p",null,"Library typealias and classes should be internal or private."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.16.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,a.kt)("h4",{id:"noncompliant-code-2"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"// code from a library\nclass A\n")),(0,a.kt)("h4",{id:"compliant-code-2"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"// code from a library\ninternal class A\n")))}m.isMDXComponent=!0}}]);