(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{401:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vuepress-plugin-migrate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-migrate"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://vuepress.github.io/plugins/migrate.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-migrate"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-migrate",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/npm/v/vuepress-plugin-migrate.svg",alt:"npm"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("A "),r("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),r("OutboundLink")],1),t._v(" plugin which migrates a website to VuePress.")]),t._v(" "),r("h2",{attrs:{id:"cli-commands"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cli-commands"}},[t._v("#")]),t._v(" CLI Commands")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("download:")]),t._v(" crawl pages from the source site and store them in a local folder.")]),t._v(" "),r("li",[r("strong",[t._v("convert:")]),t._v(" convert local HTML files to a markdown files and output them.")]),t._v(" "),r("li",[r("strong",[t._v("migrate:")]),t._v(" execute both "),r("em",[t._v("download")]),t._v(" and "),r("em",[t._v("convert")]),t._v(" command in sequence.")])]),t._v(" "),r("h2",{attrs:{id:"options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),r("h3",{attrs:{id:"targetdir"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#targetdir"}},[t._v("#")]),t._v(" targetDir")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("string")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("'_posts'")])])]),t._v(" "),r("p",[t._v("The directory for generated markdown files.")]),t._v(" "),r("h3",{attrs:{id:"downloaddir"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#downloaddir"}},[t._v("#")]),t._v(" downloadDir")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("string")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("'.vuepress/downloads'")])])]),t._v(" "),r("p",[t._v("The directory for downloaded HTMLs.")]),t._v(" "),r("h3",{attrs:{id:"maxconcurrenttasks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#maxconcurrenttasks"}},[t._v("#")]),t._v(" maxConcurrentTasks")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("number")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("10")])])]),t._v(" "),r("p",[t._v("The maximum number of concurrent downloads allowed.")]),t._v(" "),r("h3",{attrs:{id:"forcedownload"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#forcedownload"}},[t._v("#")]),t._v(" forceDownload")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("boolean")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("false")])])]),t._v(" "),r("p",[t._v("Whether to force download a "),r("code",[t._v(".html")]),t._v(" file when it already exists.")]),t._v(" "),r("h3",{attrs:{id:"forceconvert"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#forceconvert"}},[t._v("#")]),t._v(" forceConvert")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("boolean")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("false")])])]),t._v(" "),r("p",[t._v("Whether to force overwrite a "),r("code",[t._v(".md")]),t._v(" when it already exists.")]),t._v(" "),r("h3",{attrs:{id:"sitemap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sitemap"}},[t._v("#")]),t._v(" sitemap")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("string")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("undefined")])])]),t._v(" "),r("p",[t._v("The sitemap URL for the source website.")]),t._v(" "),r("h3",{attrs:{id:"getfilename"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getfilename"}},[t._v("#")]),t._v(" getFileName")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("(url: string) => string")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("url => String(++index)")])])]),t._v(" "),r("p",[t._v("The name of the file to save as. If a falsy value is returned, the corresponding file is not downloaded.")]),t._v(" "),r("h3",{attrs:{id:"parsehtml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parsehtml"}},[t._v("#")]),t._v(" parseHTML")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("($: CheerioElement, render: ($: CheerioElement) => string) => ParsedResult")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("undefined")])])]),t._v(" "),r("p",[t._v("Generates a function corresponding to the "),r("code",[t._v("ParsedResult")]),t._v(" object from the crawled HTML. A "),r("code",[t._v("ParsedResult")]),t._v(" is an object with the following properties:")]),t._v(" "),r("div",{staticClass:"language-ts extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ts"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParsedResult")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  frontmatter"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v("\n  filename"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  content"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h2",{attrs:{id:"contribution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[t._v("#")]),t._v(" Contribution")]),t._v(" "),r("p",[t._v("Contribution Welcome!")])])}),[],!1,null,null,null);e.default=s.exports}}]);