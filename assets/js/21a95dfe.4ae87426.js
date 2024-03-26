"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[2925],{1171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=n(5893),s=n(1151);const i={id:"extensions",title:"Extending detekt",keywords:["extensions","rulesets"],sidebar_position:9},r=void 0,l={id:"introduction/extensions",title:"Extending detekt",description:"The following page describes how to extend detekt and how to customize it to your domain-specific needs.",source:"@site/versioned_docs/version-1.23.5/introduction/extensions.md",sourceDirName:"introduction",slug:"/introduction/extensions",permalink:"/docs/1.23.5/introduction/extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.5/introduction/extensions.md",tags:[],version:"1.23.5",sidebarPosition:9,frontMatter:{id:"extensions",title:"Extending detekt",keywords:["extensions","rulesets"],sidebar_position:9},sidebar:"defaultSidebar",previous:{title:"Suppressors",permalink:"/docs/1.23.5/introduction/suppressors"},next:{title:"Using Snapshots",permalink:"/docs/1.23.5/introduction/snapshots"}},d={},a=[{value:"<a>Custom RuleSets</a>",id:"custom-rulesets",level:4},{value:"<a>Testing your rules</a>",id:"testing-your-rules",level:5},{value:"<a>Custom Processors</a>",id:"custom-processors",level:4},{value:"<a>Custom Reports</a>",id:"custom-reports",level:4},{value:"<a>Let detekt know about your extensions</a>",id:"let-detekt-know-about-your-extensions",level:4},{value:"Integrate your extension with the detekt CLI",id:"integrate-your-extension-with-the-detekt-cli",level:5},{value:"Integrate your extension with the Detekt Gradle Plugin",id:"integrate-your-extension-with-the-detekt-gradle-plugin",level:5},{value:"Gradle (Kotlin/Groovy DSL)",id:"gradle-kotlingroovy-dsl",level:6},{value:"Pitfalls",id:"pitfalls",level:5},{value:"autoCorrect property",id:"autocorrect-property",level:4}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The following page describes how to extend detekt and how to customize it to your domain-specific needs.\nThe associated ",(0,o.jsx)(t.strong,{children:"code samples"})," to this guide can be found in the package ",(0,o.jsx)(t.a,{href:"https://github.com/detekt/detekt/tree/main/detekt-sample-extensions",children:"detekt/detekt-sample-extensions"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"custom-rulesets",children:(0,o.jsx)("a",{name:"customrulesets",children:"Custom RuleSets"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"detekt"})," uses the ",(0,o.jsx)(t.code,{children:"ServiceLoader"})," pattern to collect all instances of ",(0,o.jsx)(t.code,{children:"RuleSetProvider"})," interfaces.\nSo it is possible to define rules/rule sets and enhance ",(0,o.jsx)(t.em,{children:"detekt"})," with your own flavor."]}),"\n",(0,o.jsx)(t.admonition,{title:"Attention",type:"caution",children:(0,o.jsxs)(t.p,{children:["You need a ",(0,o.jsx)(t.code,{children:"resources/META-INF/services/io.gitlab.arturbosch.detekt.api.RuleSetProvider"})," file which\nhas as content the fully qualified name of your ",(0,o.jsx)(t.code,{children:"RuleSetProvider"})," e.g. ",(0,o.jsx)(t.code,{children:"io.gitlab.arturbosch.detekt.sample.extensions.SampleProvider"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["You can use our ",(0,o.jsx)(t.a,{href:"https://github.com/detekt/detekt-custom-rule-template",children:"GitHub template"})," to have a basic scaffolding to\ndevelop your own custom rules. Another option is to clone the provided ",(0,o.jsx)(t.a,{href:"https://github.com/detekt/detekt/tree/main/detekt-sample-extensions",children:"detekt/detekt-sample-extensions"})," project."]}),"\n",(0,o.jsxs)(t.p,{children:["Own rules have to extend the abstract ",(0,o.jsx)(t.em,{children:"Rule"})," class and override the ",(0,o.jsx)(t.code,{children:"visitXXX()"}),"-functions from the AST.",(0,o.jsx)(t.br,{}),"\n","A ",(0,o.jsx)(t.code,{children:"RuleSetProvider"})," must be implemented, which declares a ",(0,o.jsx)(t.code,{children:"RuleSet"})," in the ",(0,o.jsx)(t.code,{children:"instance()"}),"-function.\nTo leverage the configuration mechanism of detekt you must pass the Config object from your rule set provider to your rule.\nAn ",(0,o.jsx)(t.code,{children:"Issue"})," property defines what ID, severity and message should be printed on the console or on any other output format."]}),"\n",(0,o.jsx)(t.p,{children:"Example of a custom rule:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'class TooManyFunctions(config: Config) : Rule(config) {\n\n    override val issue = Issue(javaClass.simpleName,\n        Severity.CodeSmell,\n        "This rule reports a file with an excessive function count.",\n        Debt.TWENTY_MINS)\n\n    private val threshold = 10\n    private var amount: Int = 0\n\n    override fun visitKtFile(file: KtFile) {\n        super.visitKtFile(file)\n        if (amount > threshold) {\n            report(CodeSmell(issue, Entity.from(file), \n                "Too many functions can make the maintainability of a file costlier")\n        }\n        amount = 0\n    }\n\n    override fun visitNamedFunction(function: KtNamedFunction) {\n        super.visitNamedFunction(function)\n        amount++\n    }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Example of a much preciser rule in terms of more specific CodeSmell constructor and Rule attributes:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'class TooManyFunctions2(config: Config) : Rule(config) {\n\n    override val issue = Issue(\n        javaClass.simpleName,\n        Severity.CodeSmell,\n        "This rule reports a file with an excessive function count.",\n        Debt.TWENTY_MINS\n    )\n\n    private val threshold: Int by config(defaultValue = 10)\n    private var amount: Int = 0\n\n    override fun visitKtFile(file: KtFile) {\n        super.visitKtFile(file)\n        if (amount > threshold) {\n            report(ThresholdedCodeSmell(issue,\n                entity = Entity.from(file),\n                metric = Metric(type = "SIZE", value = amount, threshold = threshold),\n                message = "The file ${file.name} has $amount function declarations. " +\n                        "Threshold is specified with $threshold.",\n                references = emptyList())\n            )\n        }\n        amount = 0\n    }\n\n    override fun visitNamedFunction(function: KtNamedFunction) {\n        super.visitNamedFunction(function)\n        amount++\n    }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["If you want your rule to be configurable, write down your properties inside the detekt.yml file.\nPlease note that this will only take effect, if the ",(0,o.jsx)(t.code,{children:"Config"})," object is passed on by the ",(0,o.jsx)(t.code,{children:"RuleSetProvider"}),"\nto the rule itself."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"MyRuleSet:\n  TooManyFunctions2:\n    active: true\n    threshold: 5\n  OtherRule:\n    active: false\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By specifying the rule set and rule ids, ",(0,o.jsx)(t.em,{children:"detekt"})," will use the sub configuration of ",(0,o.jsx)(t.code,{children:"TooManyFunctions2"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:'val threshold = valueOrDefault("threshold", THRESHOLD)'})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["As of version 1.2.0 detekt now verifies if all configured properties actually exist in a configuration created by ",(0,o.jsx)(t.code,{children:"--generate-config"}),".\nThis means that by default detekt does not know about your new properties.\nTherefore we need to mention them in the configuration under ",(0,o.jsx)(t.code,{children:"config>excludes"}),"."]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"config:\n  validation: true\n  # 1. exclude rule set 'sample' and all its nested members\n  # 2. exclude every property in every rule under the rule set 'sample'\n  excludes: \"sample.*,sample>.*>.*\"\n"})}),"\n",(0,o.jsx)(t.h5,{id:"testing-your-rules",children:(0,o.jsx)("a",{name:"testing",children:"Testing your rules"})}),"\n",(0,o.jsxs)(t.p,{children:["To test your rules, add the dependency on ",(0,o.jsx)(t.code,{children:"detekt-test"})," to your project: ",(0,o.jsx)(t.code,{children:'testCompile "io.gitlab.arturbosch.detekt:detekt-test:$version"'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The easiest way to detect issues with your newly created rule is to use the ",(0,o.jsx)(t.code,{children:"lint"})," extension function:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"Rule.lint(StringContent/Path/KtFile): List<Finding>"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If you need to reuse the Kotlin file for performance reasons within similar test cases, please use one of these functions:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"compileContentForTest(content: String): KtFile"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"compileForTest(path: Path): KtFile"})}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"custom-processors",children:(0,o.jsx)("a",{name:"customprocessors",children:"Custom Processors"})}),"\n",(0,o.jsx)(t.p,{children:"Custom processors can be used for example to implement additional project metrics."}),"\n",(0,o.jsx)(t.p,{children:"When for whatever reason you want to count all loop statements inside your code base, you could write something like:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'class NumberOfLoopsProcessor : FileProcessListener {\n\n\toverride fun onProcess(file: KtFile) {\n\t\tval visitor = LoopVisitor()\n\t\tfile.accept(visitor)\n\t\tfile.putUserData(numberOfLoopsKey, visitor.numberOfLoops)\n\t}\n\n\tcompanion object {\n\t\tval numberOfLoopsKey = Key<Int>("number of loops")\n\t}\n\n\tclass LoopVisitor : DetektVisitor() {\n\n\t\tinternal var numberOfLoops = 0\n\t\toverride fun visitLoopExpression(loopExpression: KtLoopExpression) {\n\t\t\tsuper.visitLoopExpression(loopExpression)\n\t\t\tnumberOfLoops++\n\t\t}\n\t}\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["To let detekt know about the new processor, we specify a ",(0,o.jsx)(t.code,{children:"resources/META-INF/services/io.gitlab.arturbosch.detekt.api.FileProcessListener"})," file\nwith the full qualify name of our processor as the content: ",(0,o.jsx)(t.code,{children:"io.gitlab.arturbosch.detekt.sample.extensions.processors.NumberOfLoopsProcessor"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["To test the code we use the ",(0,o.jsx)(t.code,{children:"detekt-test"})," module and write a JUnit 5 testcase."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'class NumberOfLoopsProcessorTest {\n\n    @Test\n    fun `should expect two loops`() {\n        val code = """\n            fun main() {\n                for (i in 0..10) {\n                    while (i < 5) {\n                        println(i)\n                    }\n                }\n            }\n        """\n\n        val ktFile = compileContentForTest(code)\n        NumberOfLoopsProcessor().onProcess(ktFile)\n\n        assertThat(ktFile.getUserData(NumberOfLoopsProcessor.numberOfLoopsKey)).isEqualTo(2)\n    }\n}\n'})}),"\n",(0,o.jsx)(t.h4,{id:"custom-reports",children:(0,o.jsx)("a",{name:"customreports",children:"Custom Reports"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"detekt"})," allows you to extend the console output and to create custom output formats.\nIf you want to customize the output, take a look at the ",(0,o.jsx)(t.code,{children:"ConsoleReport"})," and ",(0,o.jsx)(t.code,{children:"OutputReport"})," classes."]}),"\n",(0,o.jsxs)(t.p,{children:["All they need are an implementation of the ",(0,o.jsx)(t.code,{children:"render()"}),"-function which takes an object with all findings and returns a string to be printed out."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:"abstract fun render(detektion: Detektion): String?\n"})}),"\n",(0,o.jsx)(t.h4,{id:"let-detekt-know-about-your-extensions",children:(0,o.jsx)("a",{name:"configureextensions",children:"Let detekt know about your extensions"})}),"\n",(0,o.jsxs)(t.p,{children:["So you have implemented your own rules or other extensions and want to integrate them\ninto your ",(0,o.jsx)(t.code,{children:"detekt"})," run? Great, make sure to have a ",(0,o.jsx)(t.code,{children:"jar"})," with all your needed dependencies\nminus the ones ",(0,o.jsx)(t.code,{children:"detekt"})," brings itself."]}),"\n",(0,o.jsxs)(t.p,{children:["Take a look at our ",(0,o.jsx)(t.a,{href:"https://github.com/detekt/detekt/tree/main/detekt-sample-extensions",children:"sample project"})," on how to achieve this with gradle."]}),"\n",(0,o.jsx)(t.h5,{id:"integrate-your-extension-with-the-detekt-cli",children:"Integrate your extension with the detekt CLI"}),"\n",(0,o.jsxs)(t.p,{children:["Mention your ",(0,o.jsx)(t.code,{children:"jar"})," with the ",(0,o.jsx)(t.code,{children:"--plugins"})," flag when calling the cli fatjar:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"detekt --input ... --plugins /path/to/my/jar\n"})}),"\n",(0,o.jsx)(t.h5,{id:"integrate-your-extension-with-the-detekt-gradle-plugin",children:"Integrate your extension with the Detekt Gradle Plugin"}),"\n",(0,o.jsxs)(t.p,{children:["For example ",(0,o.jsx)(t.code,{children:"detekt"})," itself provides a wrapper over ",(0,o.jsx)(t.a,{href:"https://github.com/pinterest/ktlint",children:"ktlint"})," as a\ncustom ",(0,o.jsx)(t.code,{children:"formatting"})," rule set.\nTo enable it, we add the published dependency to ",(0,o.jsx)(t.code,{children:"detekt"})," via the ",(0,o.jsx)(t.code,{children:"detektPlugins"})," configuration:"]}),"\n",(0,o.jsx)(t.h6,{id:"gradle-kotlingroovy-dsl",children:"Gradle (Kotlin/Groovy DSL)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'dependencies {\n    detektPlugins("io.gitlab.arturbosch.detekt:detekt-formatting:1.23.3")\n}\n'})}),"\n",(0,o.jsx)(t.h5,{id:"pitfalls",children:"Pitfalls"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["All rules are disabled by default and have to be explicitly enabled in the ",(0,o.jsx)(t.code,{children:"detekt"})," yaml configuration file."]}),"\n",(0,o.jsxs)(t.li,{children:["If you do not pass the ",(0,o.jsx)(t.code,{children:"Config"})," object from the ",(0,o.jsx)(t.code,{children:"RuleSetProvider"})," to the rule, the rule is active, but you will not be able to use\nany configuration options or disable the rule via config file."]}),"\n",(0,o.jsxs)(t.li,{children:["If your extension is part of your project and you integrate it like ",(0,o.jsx)(t.code,{children:'detektPlugins project(":my-rules")'})," make sure that this\nsubproject is build before ",(0,o.jsx)(t.code,{children:"gradle detekt"})," is run.\nIn the ",(0,o.jsx)(t.code,{children:"kotlin-dsl"})," you could add something like ",(0,o.jsx)(t.code,{children:'tasks.withType<Detekt> { dependsOn(":my-rules:assemble") }'})," to explicitly run ",(0,o.jsx)(t.code,{children:"detekt"})," only\nafter your extension sub project is built."]}),"\n",(0,o.jsxs)(t.li,{children:["If you use detekt for your Android project, and if you want to integrate all your custom rules in a new module, please make sure that\nyou created a pure kotlin module which has no Android dependencies. ",(0,o.jsx)(t.code,{children:'apply plugin: "kotlin"'})," is enough to make it work."]}),"\n",(0,o.jsxs)(t.li,{children:["Sometimes when you run detekt task, you may not see the violations detected by your custom rules. In this case open a terminal and run\n",(0,o.jsx)(t.code,{children:"./gradlew --stop"})," to stop gradle daemons and run the task again."]}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"autocorrect-property",children:"autoCorrect property"}),"\n",(0,o.jsxs)(t.p,{children:["In detekt you can write custom rules which can manipulate your code base.\nFor this a cli flag ",(0,o.jsx)(t.code,{children:"--auto-correct"})," and the gradle plugin property ",(0,o.jsx)(t.code,{children:"autoCorrect"})," exists.\nOnly write auto correcting code within the ",(0,o.jsx)(t.code,{children:"Rule#withAutoCorrect()"}),"-function."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var o=n(7294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);