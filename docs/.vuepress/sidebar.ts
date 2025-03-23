import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "编码规范",
      children: [
        {
          text: "HTML 编码规范",
          link: "/coding/html.md",
        },
        {
          text: "CSS 编码规范",
          link: "/coding/css.md",
        },
        {
          text: "JavaScript 编码规范",
          link: "/coding/javascript.md",
        },
        {
          text: "Node 编码规范",
          link: "/coding/node.md",
        },
        {
          text: "Typescript 编码规范",
          link: "/coding/typescript.md",
        },
      ],
    },
    {
      text: "工程规范",
      children: [
        {
          text: "Git 规范",
          link: "/engineering/git.md",
        },
        {
          text: "文档规范",
          link: "/engineering/doc.md",
        },
        {
          text: "CHANGELOG 规范",
          link: "/engineering/changelog.md",
        },
      ],
    },
    {
      title: "NPM包",
      children: [
        { title: "wang-eslint-config", path: "/npm/eslint.md" },
        { title: "wang-stylelint-config", path: "/npm/stylelint.md" },
        { title: "wang-commitlint-config", path: "/npm/commitlint.md" },
        { title: "wang-markdownlint-config", path: "/npm/markdownlint.md" },
        { title: "wang-eslint-plugin", path: "/npm/eslint-plugin.md" },
      ],
    },
    {
      title: "脚手架",
      children: [{ title: "wang-lint", path: "/cli/wang-lint.md" }],
    },
  ],
});
