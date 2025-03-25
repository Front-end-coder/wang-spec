import { navbar } from 'vuepress-theme-hope'

export default navbar([
    { text: '首页', link: '/index.md' },
    {
        text: '编码规范',
        children: [
            { text: 'HTML 编码规范', link: '/coding/html.md' },
            { text: 'CSS 编码规范', link: '/coding/css.md' },
            { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
            { text: 'Node 编码规范', link: '/coding/node.md' },
            { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
        ]
    },
    {
        text: '工程规范',
        children: [
            { text: 'Git 规范', link: '/engineering/git.md' },
            { text: '文档规范', link: '/engineering/doc.md' },
            { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
        ],
    },
    {
        text: 'NPM包',
        children: [
          { text: 'eslint-config-wang', link: '/npm/eslint.md' },
          { text: 'wang-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'wang-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'wang-markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'eslint-plugin-wang', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'wang-lint-cli', link: '/cli/wang-lint-cli.md' }],
      },
])