(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{575:function(e,a,s){"use strict";s.r(a);var t=s(50),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-headertags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-headertags"}},[e._v("#")]),e._v(" vuepress-plugin-headertags")]),e._v(" "),s("blockquote",[s("p",[e._v("plugin for vuepress to add header tags")])]),e._v(" "),s("p",[e._v("Adds specified header tags to rendered pages")]),e._v(" "),s("h2",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),s("p",[e._v("Had a use case where I need to add headers to a page.  There is a somewhat easy way to add headers to all pages using the 'head' tag in the .vuepress/config.js file, but no easy way to tune it for specific pages.")]),e._v(" "),s("p",[e._v("You will need to fork or copy this repo and make modifications to your copy to add tuning code.  For an example of how this is done, look at this plugin: "),s("a",{attrs:{href:"vuepress-plugin-netlifycms"}}),e._v(".  Look in the 'HeaderTags.vue' to see how the action is filtered to only the main (\"/\") page.")]),e._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("yarn add vuepress-plugin-headertags -D\n")])])]),s("p",[e._v("(Note the "),s("strong",[e._v("-D")]),e._v(" is "),s("em",[e._v("very")]),e._v(" important...)")]),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("In .vuepress/config.js:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n  plugins: [\n    [\n      'vuepress-plugin-headerTags',\n      {\n        headerTags: ['<script src=\"somewhere.js\"><\/script>',\n                     '<link rel=\"somelink\"></link>',\n                      (etc)\n                      ]\n      }\n    ]\n  ]\n}\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);