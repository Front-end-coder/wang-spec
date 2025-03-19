import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    
    logo: '/logo.png',

    repo: 'https://github.com/Front-end-coder/wang-spec',

    navbar,
    sidebar,

    footer: 'MIT Licensed | Copyright © 2022-present Front-end-coder',

    plugins: {
        // 评论区
        comment: {
            provider: "Giscus",
            repo: "https://github.com/Front-end-coder/wang-spec",
            repoId: "R_kgDOOJsd5A",
            category: "Announcements",
            categoryId: "DIC_kwDOOJsd5M4CoKFK",
          },
        // 搜索
        slimsearch: {
            suggestion: true,
        }
    }
})