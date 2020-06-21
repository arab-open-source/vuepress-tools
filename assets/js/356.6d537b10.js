(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{833:function(e,t,n){"use strict";n.r(t);var a=n(50),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vuepress-blog-theme"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-blog-theme"}},[e._v("#")]),e._v(" VuePress Blog Theme")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://circleci.com/gh/youdeliang/vuepress-theme-melodydl",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/circleci/build/github/youdeliang/vuepress-theme-melodydl",alt:""}}),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-theme-melodydl",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/npm/v/vuepress-theme-melodydl",alt:""}}),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://github.com/youdeliang/vuepress-theme-melodydl/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/github/license/youdeliang/vuepress-theme-melodydl",alt:""}}),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("English | [简体中文](https://raw.githubusercontent.com/You DeLiang/vuepress-theme-melodydl/master/README-zh.md)")]),e._v(" "),n("h2",{attrs:{id:"features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),n("ul",[n("li",[e._v("[x]  This is theme of Vuepress，support the Tag、Pagination and Comment of Blog。")]),e._v(" "),n("li",[e._v("[x]  Theme is minimalist，config is simple，mobile is adaptive。")]),e._v(" "),n("li",[e._v("[x] "),n("a",{attrs:{href:"https://www.ydlcq.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Address"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("[x] Blog Show：")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/2/171d4a46cd1c4caf?w=599&h=287&f=gif&s=1994152",alt:""}})]),e._v(" "),n("h2",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),n("h3",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" installation")]),e._v(" "),n("p",[e._v("Create a new project "),n("code",[e._v("myBlog")]),e._v("：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mkdir myBlog\ncd myBlog\n")])])]),n("p",[e._v("init by yarn or npm ：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yarn init  or npm init -y\n")])])]),n("p",[e._v("install "),n("code",[e._v("vuepress")]),e._v(" 和 "),n("code",[e._v("vuepress-theme-melodydl")]),e._v("：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yarn add vuepress vuepress-theme-melodydl\nor\nnpm install vuepress vuepress-theme-melodydl\n")])])]),n("p",[e._v("Create "),n("code",[e._v("src/_posts")]),e._v(" directory and the config file of Vuepress. The structure of your project looks like：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("my-blog\n├── src # Blog source files directory\n│   ├── .vuepress # Vuepress directory\n│   │   └── public # Vuepress static directory\n│   │   └── config.js # Vuepress config file\n│   └── about # About page directory\n│   │   ├── index.md  # about page directory\n│   └── _posts # Post directory\n│       ├── xxx.md\n│       ...\n└── package.json\n")])])]),n("p",[e._v("add script files into "),n("code",[e._v("package.json")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "scripts": {\n    "dev": "vuepress dev src",\n    "build": "vuepress build src"\n  }\n}\n')])])]),n("h3",{attrs:{id:"config-the-theme"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config-the-theme"}},[e._v("#")]),e._v(" Config the theme")]),e._v(" "),n("p",[e._v("Config Vuepress and this theme in "),n("code",[e._v("src/.vuepress/config.js")]),e._v("：")]),e._v(" "),n("details",[n("summary",[e._v("click to expand the config")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\n      // Website title\n      title: 'Top Blog',\n      \n      // Description of your website\n      description: 'Personal Blog',\n      \n      // Favicon and others of website\n      head: [\n        ['link', { rel: 'icon', href: '/favicon.ico' }],\n        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]\n      ],\n      \n      // Theme to use\n      theme: 'melodydl',\n      \n      // Theme config\n      themeConfig: {\n        title: 'Top Blog',\n\n    // Personal information\n    personalInfo: {\n    \n      // Nikename\n      name: 'melodydl',\n      \n      // Avatar image\n      avatar: '/avatar-top.jpeg',\n      \n      // Background image in header\n      headerBackgroundImg: '/avatar-bg.jpeg',\n      \n      // Introduction of yourself (HTML supported)\n      description: 'In me the tiger sniffs the rose,\n      \n      // Email\n      email: 'facecode@foxmail.com',\n      \n      // Location\n      location: 'Shanghai, China'\n    },\n    // Header config (Optional)\n    nav: [ \n      {text: 'HOME', link: '/' },\n      {text: 'ABOUT', link: '/about/'},\n      {text: 'TAGS', link: '/tags/'}      \n    ],\n    \n    //  Background image of navbar in public directory \n    header: {\n      home: {\n        title: 'Top Blog', \n        subtitle: 'Happy Life, slowly meeting', \n        headerImage: '/home-bg.jpeg'\n      },\n      \n      // title and background image about tag in public directory\n      tags: {\n        title: 'Tags', \n        subtitle: 'It took all my luck to meet you', \n        headerImage: '/tags-bg.jpg'\n      },\n      \n      // background image of Post's navbar\n      postHeaderImg: '/post-bg.jpeg',\n    },\n    \n    // Accounts of SNS\n    sns: {\n      // Jianshu account and link\n      \"jianshu\": { \n        account: \"jianshu\", \n        link: \"https://www.jianshu.com/u/5dddaee8f351\", \n      },\n      \n      // Weibo account and link\n      \"weibo\": { \n        account: \"\",\n        link: \"\"\n      },\n      \n      // Zhihu account and link\n      \"zhihu\": { \n        account: \"zhihu\",\n        link: \"https://www.zhihu.com/people/sheng-tang-de-xing-kong\"\n      },\n      \n      // Github account and link\n      \"github\": { \n        account: \"github\",\n        link: \"https://github.com/youdeliang\"\n      }\n    },\n    // Footer of website config\n    footer: {\n      // Gitbutton config\n      gitbtn: {\n        // github repository\n        repository: \"https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-top&type=star&count=true\",\n        frameborder: 0,\n        scrolling: 0,\n        width: \"80px\",\n        height: \"20px\"\n      },\n      \n      // Add footer content\n      custom: `Copyright &copy; Top Blog 2020 <br /> \n        Theme By <a href=\"https://www.vuepress.cn/\" target=\"_blank\">VuePress</a>\n        | <a href=\"https://www.github.com/youdeliang/\" target=\"_blank\">youdeliang</a>`\n    },\n    \n    // Pagination config\n    pagination: {\n      // number of perPage\n      perPage: 5,\n    },\n    \n    // Comments config. See the [Posts Comments] section below.\n    comments: {    \n      owner: 'youdeliang',\n      repo: 'vuepress-theme-melodydl',\n      clientId: 'dfba8ecad544784fec1f',\n      clientSecret: '1358ac11bc8face24f598601991083e27372988d',\n      autoCreateIssue: false,\n    },\n  }\n}\n")])])])]),e._v(" "),n("h3",{attrs:{id:"about-page-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#about-page-config"}},[e._v("#")]),e._v(" About page config")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("---\nlayout: about \ntitle: About\nsubtitle: You can be great but you don't have to be perfect\nheaderImage: /about-bg.jpg # picture in public directory\n---\n\nAbout personal Information...\n")])])]),n("h3",{attrs:{id:"write-your-posts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#write-your-posts"}},[e._v("#")]),e._v(" Write your posts")]),e._v(" "),n("p",[e._v("Create first files in "),n("code",[e._v("src/_posts")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\x3c!-- _posts/2019-04-01-Promise.md --\x3e\n---\ntitle: "JavaScript about Promise"\ndate: 2019-04-01\ntags:\n  - Promise\n  - JavaScript\n---\n\nThis is my first post.\n\nThe content above `more` is the excerpt, which will be displayed in the posts list.\n\n\x3c!-- more --\x3e\n\nThe content below `more` will only be displayed when viewing this post, and will not be displayed in the posts list.\n\n')])])]),n("p",[e._v("Run the "),n("code",[e._v("script")]),e._v(" to generate your blog website:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# develop\nnpm run dev\n# build\nnpm run build\n")])])]),n("h2",{attrs:{id:"end"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[e._v("#")]),e._v(" End")]),e._v(" "),n("p",[e._v("If you like the theme, you can Star to support me ~~ Thank you🙏🙏")])])}),[],!1,null,null,null);t.default=s.exports}}]);