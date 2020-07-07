(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{660:function(t,s,a){"use strict";a.r(s);var e=a(50),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-sitemap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-sitemap"}},[t._v("#")]),t._v(" vuepress-plugin-sitemap")]),t._v(" "),a("p",[t._v("Sitemap generator plugin for vuepress.")]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Yarn")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-sitemap\n")])])])]),t._v(" "),a("li",[a("p",[t._v("NPM")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-sitemap\n")])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("in v2.0.0, dependencies except "),a("code",[t._v("sitemap")]),t._v(" are moved to peerDependencies so we need to install "),a("code",[t._v("esm")]),t._v(" module manually ("),a("code",[t._v("chalk")]),t._v(" and "),a("code",[t._v("commander")]),t._v(" are already installed by "),a("code",[t._v("vuepress")]),t._v(") when we use this plugin with "),a("em",[t._v("cli method")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"vuepress-v1-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-v1-x"}},[t._v("#")]),t._v(" Vuepress v1.x")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sitemap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://pake.web.id'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"vuepress-v0-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-v0-x"}},[t._v("#")]),t._v(" Vuepress v0.x")]),t._v(" "),a("p",[t._v("There's no plugin supported with Vuepress v0.x so we need to run it after the build process manually (or with npm "),a("code",[t._v("postbuild")]),t._v(" script).")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Manual")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./node_modules/.bin/vuepress -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),t._v("\n./node_modules/.bin/vuepress-sitemap -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://pake.web.id"')]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("NPM Script")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  scripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs -d dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    postbuild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress-sitemap -H https://pake.web.id -d dist"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" website root url\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//pake.web.id\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("outFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sitemap.xml\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sitemap file name\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sitemap.txt\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("urls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" array\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" custom urls to append\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/place'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("changefreq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'monthly'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" array\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages path to exclude\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/404.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dateFormatter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" function\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" change the date format\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" new Date(time).toISOString()\n")])])]),a("h2",{attrs:{id:"frontmatter-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-options"}},[t._v("#")]),t._v(" Frontmatter Options")]),t._v(" "),a("p",[t._v("To override global option for a specific page, we can use "),a("code",[t._v("sitemap")]),t._v(" key on the frontmatter,\ncurrently we just have 2 options, they are "),a("code",[t._v("exclude")]),t._v(" and "),a("code",[t._v("changefreq")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sitemap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("changefreq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hourly\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Content Updated Frequently")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Note:")]),t._v("\nOther options of "),a("a",{attrs:{href:"https://npm.im/sitemap",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitemap"),a("OutboundLink")],1),t._v(" can be used, all options passed except "),a("code",[t._v("urls")]),t._v(", "),a("code",[t._v("hostname")]),t._v(", "),a("code",[t._v("cacheTime")]),t._v(", "),a("code",[t._v("xslUrl")]),t._v(", "),a("code",[t._v("xmlNs")]),t._v(" and "),a("code",[t._v("outFile")]),t._v(" will be passed to "),a("code",[t._v("sitemap.createSitemap")]),t._v(" constructor.")]),t._v(" "),a("h2",{attrs:{id:"related-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-plugins"}},[t._v("#")]),t._v(" Related Plugins")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ekoeryanto/vuepress-plugin-server-push",target:"_blank",rel:"noopener noreferrer"}},[t._v("Server Push Links Generator"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"credits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[t._v("#")]),t._v(" Credits")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jetbrains.com/?from=vuepress-plugin-sitemap",target:"_blank",rel:"noopener noreferrer"}},[t._v("JetBrains s.r.o"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);