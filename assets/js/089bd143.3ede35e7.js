"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1262],{1801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var i=n(5893),s=n(1151);function a(e){const t={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Usage: detekt [options]\n  Options:\n    --all-rules\n      Activates all available (even unstable) rules.\n      Default: false\n    --auto-correct, -ac\n      Allow rules to auto correct code if they support it. The default rule \n      sets do NOT support auto correcting and won't change any line in the \n      users code base. However custom rules can be written to support auto \n      correcting. The additional 'formatting' rule set, added with \n      '--plugins', does support it and needs this flag.\n      Default: false\n    --base-path, -bp\n      Specifies a directory as the base path.Currently it impacts all file \n      paths in the formatted reports. File paths in console output and txt \n      report are not affected and remain as absolute paths.\n    --baseline, -b\n      If a baseline xml file is passed in, only new code smells not in the \n      baseline are printed in the console.\n    --build-upon-default-config\n      Preconfigures detekt with a bunch of rules and some opinionated defaults \n      for you. Allows additional provided configurations to override the \n      defaults. \n      Default: false\n    --classpath, -cp\n      EXPERIMENTAL: Paths where to find user class files and depending jar \n      files. Used for type resolution.\n    --config, -c\n      Path to the config file (path/to/config.yml). Multiple configuration \n      files can be specified with ',' or ';' as separator.\n    --config-resource, -cr\n      Path to the config resource on detekt's classpath (path/to/config.yml).\n    --create-baseline, -cb\n      Treats current analysis findings as a smell baseline for future detekt \n      runs. \n      Default: false\n    --debug\n      Prints extra information about configurations and extensions.\n      Default: false\n    --disable-default-rulesets, -dd\n      Disables default rule sets.\n      Default: false\n    --excludes, -ex\n      Globbing patterns describing paths to exclude from the analysis.\n    --fail-fast\n      DEPRECATED: please use '--build-upon-default-config' together with \n      '--all-rules'. Same as 'build-upon-default-config' but explicitly \n      running all available rules. With this setting only exit code 0 is \n      returned when the analysis does not find a single code smell. Additional \n      configuration files can override rule properties which includes turning \n      off specific rules.\n      Default: false\n    --generate-config, -gc\n      Export default config. Path can be specified with --config option \n      (default path: default-detekt-config.yml)\n      Default: false\n    --help, -h\n      Shows the usage.\n    --includes, -in\n      Globbing patterns describing paths to include in the analysis. Useful in \n      combination with 'excludes' patterns.\n    --input, -i\n      Input paths to analyze. Multiple paths are separated by comma. If not \n      specified the current working directory is used.\n    --jvm-target\n      EXPERIMENTAL: Target version of the generated JVM bytecode that was \n      generated during compilation and is now being used for type resolution \n      (1.6, 1.8, 9, 10, 11, 12, 13, 14, 15, 16 or 17)\n      Default: 1.8\n    --language-version\n      EXPERIMENTAL: Compatibility mode for Kotlin language version X.Y, \n      reports errors for all language features that came out later\n      Possible Values: [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9]\n    --max-issues\n      Return exit code 0 only when found issues count does not exceed \n      specified issues count.\n    --parallel\n      Enables parallel compilation and analysis of source files. Do some \n      benchmarks first before enabling this flag. Heuristics show performance \n      benefits starting from 2000 lines of Kotlin code.\n      Default: false\n    --plugins, -p\n      Extra paths to plugin jars separated by ',' or ';'.\n    --report, -r\n      Generates a report for given 'report-id' and stores it on given 'path'. \n      Entry should consist of: [report-id:path]. Available 'report-id' values: \n      'txt', 'xml', 'html', 'md', 'sarif'. These can also be used in \n      combination with each other e.g. '-r txt:reports/detekt.txt -r \n      xml:reports/detekt.xml' \n    --version\n      Prints the detekt CLI version.\n      Default: false\n"})})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}const r={title:"Run detekt using Command Line Interface",keywords:["cli"],sidebar:null,permalink:"cli.html",folder:"gettingstarted",summary:null,sidebar_position:1},o=void 0,d={id:"gettingstarted/cli",title:"Run detekt using Command Line Interface",description:"Install the cli",source:"@site/versioned_docs/version-1.21.0/gettingstarted/cli.mdx",sourceDirName:"gettingstarted",slug:"/gettingstarted/cli",permalink:"/docs/1.21.0/gettingstarted/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.21.0/gettingstarted/cli.mdx",tags:[],version:"1.21.0",sidebarPosition:1,frontMatter:{title:"Run detekt using Command Line Interface",keywords:["cli"],sidebar:null,permalink:"cli.html",folder:"gettingstarted",summary:null,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Compatibility Table",permalink:"/docs/1.21.0/introduction/compatibility"},next:{title:"Run detekt using the Detekt Gradle Plugin",permalink:"/docs/1.21.0/gettingstarted/gradle"}},c={},u=[{value:"Install the cli",id:"install-the-cli",level:2},{value:"MacOS, with Homebrew:",id:"macos-with-homebrew",level:3},{value:"Windows, with Scoop",id:"windows-with-scoop",level:3},{value:"Any OS:",id:"any-os",level:3},{value:"Use the cli",id:"use-the-cli",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"install-the-cli",children:"Install the cli"}),"\n",(0,i.jsx)(t.p,{children:"There are different ways to install the Command Line Interface (CLI):"}),"\n",(0,i.jsxs)(t.h3,{id:"macos-with-homebrew",children:["MacOS, with ",(0,i.jsx)(t.a,{href:"https://brew.sh/",children:"Homebrew"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"brew install detekt\ndetekt [options]\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"windows-with-scoop",children:["Windows, with ",(0,i.jsx)(t.a,{href:"https://scoop.sh/",children:"Scoop"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"scoop install detekt\ndetekt [options]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"any-os",children:"Any OS:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"curl -sSLO https://github.com/detekt/detekt/releases/download/v1.23.3/detekt-cli-1.23.3.zip\nunzip detekt-cli-1.23.3.zip\n./detekt-cli-1.23.3/bin/detekt-cli --help\n"})}),"\n",(0,i.jsx)(t.h2,{id:"use-the-cli",children:"Use the cli"}),"\n",(0,i.jsx)(t.p,{children:"detekt will exit with one of the following exit codes:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Exit code"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"detekt ran normally and maxIssues count was not reached in BuildFailureReport."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"An unexpected error occurred"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"MaxIssues count was reached in BuildFailureReport."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"Invalid detekt configuration file detected."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The following parameters are shown when ",(0,i.jsx)(t.code,{children:"--help"})," is entered."]}),"\n",(0,i.jsx)(l,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var i=n(7294);const s={},a=i.createContext(s);function l(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);