import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
    '/': [
        {
            text: '编码规范',
            children: [
                {
                    text: 'HTML 编码规范',
                    link: '/coding/html.md',
                },
                {
                    text: 'CSS 编码规范',
                    link: '/coding/css.md',
                },
                {
                    text: 'JavaScript 编码规范',
                    link: '/coding/javascript.md',
                },
                {
                    text: 'Node 编码规范',
                    link: '/coding/node.md',
                },
                {
                    text: 'Typescript 编码规范',
                    link: '/coding/typescript.md',
                },
            ],
        },
        {
            text: '工程规范',
            children: [
                {
                    text: 'Git 规范',
                    link: '/engineering/git.md',
                },
                {
                    text: '文档规范',
                    link: '/engineering/doc.md',
                },
                {
                    text: 'CHANGELOG 规范',
                    link: '/engineering/changelog.md',
                },
            ],
        },
    ]
})