(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{573:function(t,e,a){"use strict";a.r(e);var s=a(50),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-gitalk-maker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-gitalk-maker"}},[t._v("#")]),t._v(" vuepress-plugin-gitalk-maker")]),t._v(" "),a("p",[a("code",[t._v("vuepress-plugin-gitalk-maker")]),t._v(" 是基于 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress"),a("OutboundLink")],1),t._v(" 的评论功能，数据源来自 github 的 issues。底层基于 "),a("a",{attrs:{href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitalk"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("yarn add vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gitalk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("maker\n")])])]),a("h3",{attrs:{id:"添加到config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加到config-js"}},[t._v("#")]),t._v(" 添加到"),a("code",[t._v("config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitalk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        gitalkConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          clientID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'clientID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          clientSecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'clientSecret'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-gitalk-maker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxholly32'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxholly32'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id: location.pathname, // 无法配置默认用 location.pathname")]),t._v("\n          distractionFreeMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Facebook-like distraction free mode")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果没有 github 应用可以去注册一个， "),a("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"gitalkconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitalkconfig"}},[t._v("#")]),t._v(" gitalkConfig")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/gitalk/gitalk#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据来源于 gitalk"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("clientID")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[a("strong",[t._v("Required")]),t._v(". GitHub Application Client ID.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("clientSecret")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[a("strong",[t._v("Required")]),t._v(". GitHub Application Client Secret.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("repo")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[a("strong",[t._v("Required")]),t._v(". GitHub repository.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("owner")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[a("strong",[t._v("Required")]),t._v(". GitHub repository owner. Can be personal user or organization.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("admin")]),t._v(" "),a("code",[t._v("Array")])]),t._v(" "),a("p",[a("strong",[t._v("Required")]),t._v(". GitHub repository owner and collaborators. (Users who having write access to this repository)")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("id")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("location.href")]),t._v(".")]),t._v(" "),a("p",[t._v("The unique id of the page. Length must less than 50.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("number")]),t._v(" "),a("code",[t._v("Number")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("-1")]),t._v(".")]),t._v(" "),a("p",[t._v("The issue ID of the page, if the "),a("code",[t._v("number")]),t._v(" attribute is not defined, issue will be located using "),a("code",[t._v("id")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("labels")]),t._v(" "),a("code",[t._v("Array")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("['Gitalk']")]),t._v(".")]),t._v(" "),a("p",[t._v("GitHub issue labels.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("title")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("document.title")]),t._v(".")]),t._v(" "),a("p",[t._v("GitHub issue title.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("body")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("location.href + header.meta[description]")]),t._v(".")]),t._v(" "),a("p",[t._v("GitHub issue body.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("language")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("navigator.language || navigator.userLanguage")]),t._v(".")]),t._v(" "),a("p",[t._v("Localization language key, "),a("code",[t._v("en")]),t._v(", "),a("code",[t._v("zh-CN")]),t._v(" and "),a("code",[t._v("zh-TW")]),t._v(" are currently available.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("perPage")]),t._v(" "),a("code",[t._v("Number")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("10")]),t._v(".")]),t._v(" "),a("p",[t._v("Pagination size, with maximum 100.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("distractionFreeMode")]),t._v(" "),a("code",[t._v("Boolean")])]),t._v(" "),a("p",[t._v("Default: false.")]),t._v(" "),a("p",[t._v("Facebook-like distraction free mode.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("pagerDirection")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[t._v("Default: 'last'")]),t._v(" "),a("p",[t._v("Comment sorting direction, available values are "),a("code",[t._v("last")]),t._v(" and "),a("code",[t._v("first")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("createIssueManually")]),t._v(" "),a("code",[t._v("Boolean")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("p",[t._v("By default, Gitalk will create a corresponding github issue for your every single page automatically when the logined user is belong to the "),a("code",[t._v("admin")]),t._v(" users. You can create it manually by setting this option to "),a("code",[t._v("true")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("proxy")]),t._v(" "),a("code",[t._v("String")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token")]),t._v(".")]),t._v(" "),a("p",[t._v("GitHub oauth request reverse proxy for CORS. "),a("a",{attrs:{href:"https://github.com/isaacs/github/issues/330",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why need this?"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("flipMoveOptions")]),t._v(" "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("Default:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    staggerDelayBy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    appearAnimation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accordionVertical'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    enterAnimation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accordionVertical'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    leaveAnimation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accordionVertical'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Comment list animation. "),a("a",{attrs:{href:"https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("enableHotKey")]),t._v(" "),a("code",[t._v("Boolean")])]),t._v(" "),a("p",[t._v("Default: "),a("code",[t._v("true")]),t._v(".")]),t._v(" "),a("p",[t._v("Enable hot key (cmd|ctrl + enter) submit comment.")])])]),t._v(" "),a("h2",{attrs:{id:"contributors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[t._v("#")]),t._v(" Contributors")]),t._v(" "),a("p",[t._v("Contribution Welcome!")]),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);