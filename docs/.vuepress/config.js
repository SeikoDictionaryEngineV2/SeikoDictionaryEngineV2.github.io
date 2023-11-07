const nav = require("./nav.js");

module.exports = {
    title: "Seiko词库引擎",
    base: '/dist/',
    dest: 'dist',
    description: "语法简洁，函数易用的跨平台词库引擎",
    markdown: {
        lineNumbers: true,
    },

    plugins: {
        "vuepress-plugin-auto-sidebar": {}
    },
    themeConfig: {
        nav: nav
    }
};
