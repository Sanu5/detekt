"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[3206],{3905:function(M,e,t){t.d(e,{Zo:function(){return r},kt:function(){return y}});var N=t(7294);function j(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function D(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);e&&(N=N.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,N)}return t}function i(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?D(Object(t),!0).forEach((function(e){j(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function u(M,e){if(null==M)return{};var t,N,j=function(M,e){if(null==M)return{};var t,N,j={},D=Object.keys(M);for(N=0;N<D.length;N++)t=D[N],e.indexOf(t)>=0||(j[t]=M[t]);return j}(M,e);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);for(N=0;N<D.length;N++)t=D[N],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(j[t]=M[t])}return j}var I=N.createContext({}),n=function(M){var e=N.useContext(I),t=e;return M&&(t="function"==typeof M?M(e):i(i({},e),M)),t},r=function(M){var e=n(M.components);return N.createElement(I.Provider,{value:e},M.children)},g={inlineCode:"code",wrapper:function(M){var e=M.children;return N.createElement(N.Fragment,{},e)}},z=N.forwardRef((function(M,e){var t=M.components,j=M.mdxType,D=M.originalType,I=M.parentName,r=u(M,["components","mdxType","originalType","parentName"]),z=n(t),y=j,a=z["".concat(I,".").concat(y)]||z[y]||g[y]||D;return t?N.createElement(a,i(i({ref:e},r),{},{components:t})):N.createElement(a,i({ref:e},r))}));function y(M,e){var t=arguments,j=e&&e.mdxType;if("string"==typeof M||j){var D=t.length,i=new Array(D);i[0]=z;var u={};for(var I in e)hasOwnProperty.call(e,I)&&(u[I]=e[I]);u.originalType=M,u.mdxType="string"==typeof M?M:j,i[1]=u;for(var n=2;n<D;n++)i[n]=t[n];return N.createElement.apply(null,i)}return N.createElement.apply(null,t)}z.displayName="MDXCreateElement"},9568:function(M,e,t){t.r(e),t.d(e,{assets:function(){return r},contentTitle:function(){return I},default:function(){return y},frontMatter:function(){return u},metadata:function(){return n},toc:function(){return g}});var N=t(3117),j=t(102),D=(t(7294),t(3905)),i=["components"],u={title:"Welcome",keywords:["detekt","static","analysis","code","kotlin"],sidebar_position:1,summary:null},I=void 0,n={unversionedId:"intro",id:"intro",title:"Welcome",description:"detekt logo",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/next/intro",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Welcome",keywords:["detekt","static","analysis","code","kotlin"],sidebar_position:1,summary:null},sidebar:"defaultSidebar",next:{title:"detekt Configuration File",permalink:"/docs/next/introduction/configurations"}},r={},g=[{value:"Features",id:"features",level:3},{value:"Quick Start with Gradle",id:"quick-start-with-gradle",level:3},{value:"Adding more rule sets",id:"adding-more-rule-sets",level:3}],z={toc:g};function y(M){var e=M.components,u=(0,j.Z)(M,i);return(0,D.kt)("wrapper",(0,N.Z)({},z,u,{components:e,mdxType:"MDXLayout"}),(0,D.kt)("p",null,(0,D.kt)("img",{alt:"detekt logo",src:t(3486).Z,title:"detekt logo",width:"225",height:"53"}),"\n",(0,D.kt)("img",{alt:"detekt in action",src:t(9770).Z,title:"detekt in action",width:"1390",height:"535"})),(0,D.kt)("h3",{id:"features"},"Features"),(0,D.kt)("ul",null,(0,D.kt)("li",{parentName:"ul"},"Code smell analysis for your ",(0,D.kt)("a",{parentName:"li",href:"https://kotlinlang.org/"},"Kotlin")," projects."),(0,D.kt)("li",{parentName:"ul"},"Highly configurable rule sets."),(0,D.kt)("li",{parentName:"ul"},"Generate baselines to suppress existing issues for legacy projects while making sure no new issues are introduced."),(0,D.kt)("li",{parentName:"ul"},"Suppress issues in source files using ",(0,D.kt)("inlineCode",{parentName:"li"},"@Suppress")," annotations."),(0,D.kt)("li",{parentName:"ul"},"Support for different report formats: HTML, Markdown, ",(0,D.kt)("a",{parentName:"li",href:"https://sarifweb.azurewebsites.net/"},"SARIF"),", XML (Checkstyle) and custom reports."),(0,D.kt)("li",{parentName:"ul"},(0,D.kt)("a",{parentName:"li",href:"introduction/extensions"},"Extend detekt")," with custom rule sets and reports."),(0,D.kt)("li",{parentName:"ul"},"Complexity reports based on lines of code, cyclomatic complexity and number of code smells."),(0,D.kt)("li",{parentName:"ul"},"First party integration with Gradle with our ",(0,D.kt)("a",{parentName:"li",href:"#with-gradle"},"Gradle plugin"),"."),(0,D.kt)("li",{parentName:"ul"},"A community of ",(0,D.kt)("a",{parentName:"li",href:"https://github.com/topics/detekt-plugin"},"third party plugins")," that adds more rules and features to detekt.")),(0,D.kt)("h3",{id:"quick-start-with-gradle"},"Quick Start with Gradle"),(0,D.kt)("p",null,"Apply the following configuration to your Gradle project build file:"),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    id("io.gitlab.arturbosch.detekt") version("1.23.0")\n}\n\nrepositories {\n    mavenCentral()\n}\n')),(0,D.kt)("p",null,"You can find what is the ",(0,D.kt)("strong",{parentName:"p"},"latest version of detekt")," in the ",(0,D.kt)("a",{parentName:"p",href:"/changelog"},"release notes"),"."),(0,D.kt)("p",null,"Once you have set up detekt in your project, simply run ",(0,D.kt)("inlineCode",{parentName:"p"},"gradlew detekt"),"."),(0,D.kt)("p",null,"To change the default behaviour of detekt rules, first generate yourself a detekt configuration file by running\n",(0,D.kt)("inlineCode",{parentName:"p"},"gradlew detektGenerateConfig")," task and applying any changes to the generated file."),(0,D.kt)("p",null,"Don't forget to reference the newly generated config inside the ",(0,D.kt)("inlineCode",{parentName:"p"},"detekt { }")," closure. Optionally, it is possible to\nslim down the configuration file to only the changes from the default configuration, by applying the\n",(0,D.kt)("inlineCode",{parentName:"p"},"buildUponDefaultConfig")," option:"),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-kotlin"},'detekt {\n    toolVersion = "1.23.0"\n    config.setFrom(file("config/detekt/detekt.yml"))\n    buildUponDefaultConfig = true\n}\n')),(0,D.kt)("p",null,"To enable/disable detekt reports use the ",(0,D.kt)("inlineCode",{parentName:"p"},"withType")," method to set defaults for all detekt tasks at once:"),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Kotlin DSL\ntasks.withType<Detekt>().configureEach {\n    reports {\n        xml.required.set(true)\n        html.required.set(true)\n        txt.required.set(true)\n        sarif.required.set(true)\n        md.required.set(true)\n    }\n}\n")),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-groovy"},"// Groovy DSL\ntasks.withType(Detekt).configureEach {\n    reports {\n        xml.required.set(true)\n        html.required.set(true)\n        txt.required.set(true)\n        sarif.required.set(true)\n        md.required.set(true)\n    }\n}\n")),(0,D.kt)("p",null,"See ",(0,D.kt)("a",{parentName:"p",href:"introduction/reporting"},"reporting")," docs for more details on configuring reports."),(0,D.kt)("h3",{id:"adding-more-rule-sets"},"Adding more rule sets"),(0,D.kt)("p",null,"detekt itself provides a wrapper over ",(0,D.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint"},"ktlint")," as the ",(0,D.kt)("inlineCode",{parentName:"p"},"formatting")," rule set\nwhich can be easily added to the Gradle configuration:"),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n    detektPlugins("io.gitlab.arturbosch.detekt:detekt-formatting:1.23.0")\n}\n')))}y.isMDXComponent=!0},3486:function(M,e){e.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI1IiBoZWlnaHQ9IjUzIiB2aWV3Qm94PSIwIDAgMjI1IDUzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNODguODg4MyA0Mi4yNjY1VjcuOTk0ODdIODEuNjk1NFYyMC4zODlDNzkuOTkxOCAxOC4zNzAzIDc3LjYyNTcgMTYuNjMzMiA3My43OTI2IDE2LjYzMzJDNjcuNzgyOCAxNi42MzMyIDYyLjI0NjEgMjEuMjM0MSA2Mi4yNDYxIDI5LjYzNzdWMjkuNzMxNkM2Mi4yNDYxIDM4LjEzNTIgNjcuODc3NCA0Mi43MzYgNzMuNzkyNiA0Mi43MzZDNzcuNTMxMSA0Mi43MzYgNzkuOTQ0NSA0MC45OTg5IDgxLjY5NTQgMzguNjUxNlY0Mi4yNjY1SDg4Ljg4ODNaTTgxLjc5IDI5LjczMTZDODEuNzkgMzMuOTA5OSA3OC45OTggMzYuNjc5OCA3NS42MzgyIDM2LjY3OThDNzIuMjc4MyAzNi42Nzk4IDY5LjQzOSAzMy45MDk5IDY5LjQzOSAyOS43MzE2VjI5LjYzNzdDNjkuNDM5IDI1LjQxMjQgNzIuMjc4MyAyMi42ODk0IDc1LjYzODIgMjIuNjg5NEM3OC45OTggMjIuNjg5NCA4MS43OSAyNS40NTkzIDgxLjc5IDI5LjYzNzdWMjkuNzMxNloiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZD0iTTEyMC4zMjUgMzAuMzg4OFYzMC4yOTQ5QzEyMC4zMjUgMjMuMTU4OSAxMTYuNDQ0IDE2LjYzMzIgMTA3Ljk3NCAxNi42MzMyQzEwMC41OTEgMTYuNjMzMiA5NS40MzM0IDIyLjU0ODYgOTUuNDMzNCAyOS43MzE2VjI5LjgyNTRDOTUuNDMzNCAzNy41MjQ4IDEwMS4wNjUgNDIuODI5OSAxMDguNjgzIDQyLjgyOTlDMTEzLjI3NCA0Mi44Mjk5IDExNi42ODEgNDEuMDQ1OSAxMTkuMDQ3IDM4LjEzNTJMMTE0LjkzIDM0LjUyMDJDMTEyLjk0MiAzNi4zNTExIDExMS4xOTIgMzcuMTAyMyAxMDguNzc4IDM3LjEwMjNDMTA1LjU2IDM3LjEwMjMgMTAzLjI4OSAzNS40MTIyIDEwMi41NzkgMzIuMTcyOEgxMjAuMjNDMTIwLjI3NyAzMS41MTU2IDEyMC4zMjUgMzEuMDkzIDEyMC4zMjUgMzAuMzg4OFpNMTEzLjMyMSAyNy43MTI4SDEwMi40ODRDMTAzLjA1MiAyNC40NzM0IDEwNC45OTIgMjIuMzYwOCAxMDcuOTc0IDIyLjM2MDhDMTExLjAwMiAyMi4zNjA4IDExMi44OTUgMjQuNTIwNCAxMTMuMzIxIDI3LjcxMjhaIiBmaWxsPSIjMjIyMjIyIi8+CjxwYXRoIGQ9Ik0xNDEuMjc4IDQxLjIzMzdWMzUuNTA2MUMxNDAuMjM3IDM2LjA2OTUgMTM5LjA1NCAzNi4zOTgxIDEzNy43MjkgMzYuMzk4MUMxMzYuMTIgMzYuMzk4MSAxMzUuNDEgMzUuNiAxMzUuNDEgMzMuOTU2OFYyMy4yMDU5SDE0MS4zNzNWMTcuMTAyN0gxMzUuNDFWMTAuNjcwOUgxMjguMjE3VjE3LjEwMjdIMTI1LjE4OVYyMy4yMDU5SDEyOC4yMTdWMzUuMTMwNUMxMjguMjE3IDQwLjk1MiAxMzEuMTk5IDQyLjY4OTEgMTM1LjU5OSA0Mi42ODkxQzEzOC4wMTMgNDIuNjg5MSAxMzkuNzY0IDQyLjEyNTcgMTQxLjI3OCA0MS4yMzM3WiIgZmlsbD0iIzIyMjIyMiIvPgo8cGF0aCBkPSJNMTcyLjAwOCAzMC4zODg4VjMwLjI5NDlDMTcyLjAwOCAyMy4xNTg5IDE2OC4xMjggMTYuNjMzMiAxNTkuNjU3IDE2LjYzMzJDMTUyLjI3NSAxNi42MzMyIDE0Ny4xMTcgMjIuNTQ4NiAxNDcuMTE3IDI5LjczMTZWMjkuODI1NEMxNDcuMTE3IDM3LjUyNDggMTUyLjc0OCA0Mi44Mjk5IDE2MC4zNjcgNDIuODI5OUMxNjQuOTU4IDQyLjgyOTkgMTY4LjM2NSA0MS4wNDU5IDE3MC43MzEgMzguMTM1MkwxNjYuNjE0IDM0LjUyMDJDMTY0LjYyNiAzNi4zNTExIDE2Mi44NzUgMzcuMTAyMyAxNjAuNDYyIDM3LjEwMjNDMTU3LjI0NCAzNy4xMDIzIDE1NC45NzMgMzUuNDEyMiAxNTQuMjYzIDMyLjE3MjhIMTcxLjkxNEMxNzEuOTYxIDMxLjUxNTYgMTcyLjAwOCAzMS4wOTMgMTcyLjAwOCAzMC4zODg4Wk0xNjUuMDA1IDI3LjcxMjhIMTU0LjE2OEMxNTQuNzM2IDI0LjQ3MzQgMTU2LjY3NiAyMi4zNjA4IDE1OS42NTcgMjIuMzYwOEMxNjIuNjg2IDIyLjM2MDggMTY0LjU3OSAyNC41MjA0IDE2NS4wMDUgMjcuNzEyOFoiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZD0iTTIwMy4yNzggNDIuMjY2NUwxOTMuMjkzIDI3LjAwODZMMjAyLjk0NyAxNy4xMDI3SDE5NC4zMzRMMTg1LjkxMSAyNi4yNTc0VjcuOTk0ODdIMTc4LjcxOFY0Mi4yNjY1SDE4NS45MTFWMzQuNjE0MUwxODguNDE5IDMxLjk4NUwxOTUuMDQ0IDQyLjI2NjVIMjAzLjI3OFoiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZD0iTTIyNC45MDUgNDEuMjMzN1YzNS41MDYxQzIyMy44NjQgMzYuMDY5NSAyMjIuNjgxIDM2LjM5ODEgMjIxLjM1NiAzNi4zOTgxQzIxOS43NDcgMzYuMzk4MSAyMTkuMDM3IDM1LjYgMjE5LjAzNyAzMy45NTY4VjIzLjIwNTlIMjI1VjE3LjEwMjdIMjE5LjAzN1YxMC42NzA5SDIxMS44NDRWMTcuMTAyN0gyMDguODE2VjIzLjIwNTlIMjExLjg0NFYzNS4xMzA1QzIxMS44NDQgNDAuOTUyIDIxNC44MjYgNDIuNjg5MSAyMTkuMjI3IDQyLjY4OTFDMjIxLjY0IDQyLjY4OTEgMjIzLjM5MSA0Mi4xMjU3IDIyNC45MDUgNDEuMjMzN1oiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjE4NjExIDBDMC45Nzg3NTUgMCAwIDAuOTc4NzU1IDAgMi4xODYxMVY0MC43NzFDMCA0MS45NzgzIDAuOTc4NzU1IDQyLjk1NzEgMi4xODYxMSA0Mi45NTcxSDI0LjI1MzRDMjUuNjUyNSA0Mi45NTcxIDI2LjYyNTggNDEuNTQ3MyAyNi4zNzc0IDQwLjE3MDVDMjYuMjEwOSAzOS4yNDgxIDI2LjEyNCAzOC4yOTgxIDI2LjEyNCAzNy4zMjc5QzI2LjEyNCAyOC41NDQzIDMzLjI0NDUgMjEuNDIzOSA0Mi4wMjggMjEuNDIzOUM0Mi44Njg5IDIxLjQyMzkgNDMuNjk0NSAyMS40ODkyIDQ0LjUwMDEgMjEuNjE0OUM0NS44NTc4IDIxLjgyNjggNDcuMjIgMjAuODU4NSA0Ny4yMiAxOS40ODQ0VjIuMTg2MTFDNDcuMjIgMC45Nzg3NTUgNDYuMjQxMiAwIDQ1LjAzMzkgMEgyLjE4NjExWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNNTUuMzM1OCA0OC42MTY2TDU0Ljc2NzMgNDguMDQ4MUw1My4yNDIxIDQ2LjUyMjlMNTIuOTUxNiA0Ni4yMzI0QzUyLjI0MjcgNDUuNTIzNCA1Mi4xODU1IDQ0LjQwNjcgNTIuNjczIDQzLjUzMDZDNTMuNjI5OSA0MS44MTA5IDU0LjE3NjIgMzkuODMzIDU0LjE3NjIgMzcuNzI5M0M1NC4xNzYyIDMyLjkxMDQgNTEuMzE0NyAyOC43NDk5IDQ3LjIwMjkgMjYuODUwMUM0Ni41MTk2IDI2LjUzNDQgNDUuODAyNCAyNi4yODA4IDQ1LjA1NzMgMjYuMDk3NEM0NC4zNjM2IDI1LjkyNjggNDMuNjQ2NyAyNS44MTY0IDQyLjkxMTggMjUuNzcyN0M0Mi42NzQ5IDI1Ljc1ODcgNDIuNDM2OSAyNS43NDk1IDQyLjE5NjYgMjUuNzQ5NUMzOC41MTY2IDI1Ljc0OTUgMzUuMjIwMyAyNy40MTg4IDMzLjAyMTEgMzAuMDM4MUMzMS45Nzg0IDMxLjI4MDIgMzEuMTgzOCAzMi43MzU3IDMwLjcxMTQgMzQuMzI5M0MzMC4zOTE2IDM1LjQwNzkgMzAuMjE3IDM2LjU0ODEgMzAuMjE3IDM3LjcyOTFDMzAuMjE3IDM4LjAyOTMgMzAuMjMxOSAzOC4zMjU5IDMwLjI1MzcgMzguNjIwNUMzMC4zMDgyIDM5LjM1NTkgMzAuNDI2NSA0MC4wNzMzIDMwLjYwODIgNDAuNzY2QzMwLjgwMzggNDEuNTExNyAzMS4wNjg5IDQyLjIyOTYgMzEuMzk3NCA0Mi45MTE2QzMzLjMzMzIgNDYuOTI5NSAzNy40NDY1IDQ5LjcwODkgNDIuMTk2NyA0OS43MDg5QzQzLjk1NyA0OS43MDg5IDQ1LjYyOTEgNDkuMzI1OSA0Ny4xMzU3IDQ4LjY0MDNDNDcuOTg0MSA0OC4yNTQzIDQ5LjAwNDYgNDguMzUzNiA0OS42NjM2IDQ5LjAxMjdMNTAuMDg5NCA0OS40Mzg1TDUxLjYzMDEgNTAuOTc5NEw1Mi4zMDE2IDUxLjY1MDlDNTIuNzIwNSA1Mi4wNjk5IDUzLjI2OTcgNTIuMjc5NCA1My44MTg2IDUyLjI3OTRDNTQuMzY3NyA1Mi4yNzk0IDU0LjkxNjkgNTIuMDY5OSA1NS4zMzU3IDUxLjY1MDlDNTYuMTczOCA1MC44MTI5IDU2LjE3MzggNDkuNDU0NCA1NS4zMzU4IDQ4LjYxNjZaTTQyLjE5NjcgNDUuNDE4QzM5Ljk1MjUgNDUuNDE4IDM3LjkzIDQ0LjQ1MSAzNi41MjMyIDQyLjkxMjJDMzUuOTQ4NSA0Mi4yODM2IDM1LjQ3NzIgNDEuNTU5NCAzNS4xMzUgNDAuNzY2N0MzNC44NDUgNDAuMDk1NCAzNC42NDkzIDM5LjM3NDYgMzQuNTYxNyAzOC42MjExQzM0LjUyNzcgMzguMzI4MyAzNC41MDg0IDM4LjAzMTQgMzQuNTA4NCAzNy43Mjk3QzM0LjUwODQgMzMuNDkwMyAzNy45NTc0IDMwLjA0MTMgNDIuMTk2OCAzMC4wNDEzQzQyLjQzNzkgMzAuMDQxMyA0Mi42NzYyIDMwLjA1MzkgNDIuOTEyIDMwLjA3NTZDNDMuNjYzOCAzMC4xNDU1IDQ0LjM4MzcgMzAuMzI0MiA0NS4wNTc2IDMwLjU5NTZDNDUuODQ1OCAzMC45MTI3IDQ2LjU2ODkgMzEuMzU2NCA0Ny4yMDMxIDMxLjkwMkM0OC44NDM0IDMzLjMxMzEgNDkuODg1MiAzNS40MDE1IDQ5Ljg4NTIgMzcuNzI5N0M0OS44ODUgNDEuOTY4OCA0Ni40MzYxIDQ1LjQxOCA0Mi4xOTY3IDQ1LjQxOFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPHBhdGggZD0iTTkuOTkzNiAyNS42OTc5QzkuMzQyMTcgMjUuNjk3OSA4Ljg0NjE4IDI1LjQ5NTggOC41MDU2NiAyNS4wOTE0QzguMTY1MTQgMjQuNjcwOSA3Ljk5NDg3IDI0LjE2OTUgNy45OTQ4NyAyMy41ODczVjIzLjQ5MDNDNy45OTQ4NyAyMi45MDggOC4xNjUxNCAyMi40MTQ3IDguNTA1NjYgMjIuMDEwNEM4Ljg0NjE4IDIxLjU4OTkgOS4zNDIxNyAyMS4zNzk2IDkuOTkzNiAyMS4zNzk2QzEwLjY0NSAyMS4zNzk2IDExLjE0MSAyMS41ODk5IDExLjQ4MTUgMjIuMDEwNEMxMS44MjIxIDIyLjQxNDcgMTEuOTkyMyAyMi45MDggMTEuOTkyMyAyMy40OTAzVjIzLjU4NzNDMTEuOTkyMyAyNC4xNjk1IDExLjgyMjEgMjQuNjcwOSAxMS40ODE1IDI1LjA5MTRDMTEuMTQxIDI1LjQ5NTggMTAuNjQ1IDI1LjY5NzkgOS45OTM2IDI1LjY5NzlaTTguMTcyNTQgMTAuODE1OFY3Ljk5NDg3SDExLjgxNDdWMTAuODE1OEwxMC42NTk4IDE5LjE2MTJIOS4zMjczNkw4LjE3MjU0IDEwLjgxNThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAuMjcyOSAyNS42OTc5QzE5LjYyMTUgMjUuNjk3OSAxOS4xMjU1IDI1LjQ5NTggMTguNzg1IDI1LjA5MTRDMTguNDQ0NCAyNC42NzA5IDE4LjI3NDIgMjQuMTY5NSAxOC4yNzQyIDIzLjU4NzNWMjMuNDkwM0MxOC4yNzQyIDIyLjkwOCAxOC40NDQ0IDIyLjQxNDcgMTguNzg1IDIyLjAxMDRDMTkuMTI1NSAyMS41ODk5IDE5LjYyMTUgMjEuMzc5NiAyMC4yNzI5IDIxLjM3OTZDMjAuOTI0MyAyMS4zNzk2IDIxLjQyMDMgMjEuNTg5OSAyMS43NjA4IDIyLjAxMDRDMjIuMTAxNCAyMi40MTQ3IDIyLjI3MTYgMjIuOTA4IDIyLjI3MTYgMjMuNDkwM1YyMy41ODczQzIyLjI3MTYgMjQuMTY5NSAyMi4xMDE0IDI0LjY3MDkgMjEuNzYwOCAyNS4wOTE0QzIxLjQyMDMgMjUuNDk1OCAyMC45MjQzIDI1LjY5NzkgMjAuMjcyOSAyNS42OTc5Wk0xOC40NTE4IDEwLjgxNThWNy45OTQ4N0gyMi4wOTRWMTAuODE1OEwyMC45MzkxIDE5LjE2MTJIMTkuNjA2N0wxOC40NTE4IDEwLjgxNThaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNS4yMjJlLTA3IiB5MT0iNDEuMzM2MSIgeDI9IjUxLjk4MiIgeTI9IjMzLjI5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM3OTQyRUUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0NjUxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUzLjAxMjEiIHkxPSI1MS41NDY1IiB4Mj0iNjAuOTgwMSIgeTI9IjMwLjI0MjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzc5NDJFRSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjQ2NTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"},9770:function(M,e,t){e.Z=t.p+"assets/images/detekt_in_action-28584853d114ee77b5b013bb77b2bce7.png"}}]);