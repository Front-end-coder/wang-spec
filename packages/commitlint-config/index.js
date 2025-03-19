module.exports = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        // [level 0 关闭 1警告 2错误, applicable 颠倒规则, value 值]
        'body-leading-blank': [1, 'always'],  // body 一定要空一行
        'body-max-line-length': [2, 'always', 100], // body 一行最多100个字符
        'footer-leading-blank': [1, 'always'], // footer 一定要空一行
        'footer-max-line-length': [2, 'always', 100], // footer 一行最多100个字符
        'header-max-length': [2, 'always', 100], // header 一行最多100个字符
        'scope-case': [2, 'always', 'lower-case'], // scope 必须小写 <type>[scope]: <subject>
        'subject-case': [0], // subject 不做限制
        'subject-empty': [2, 'never'], // subject 不能为空
        'subject-full-stop': [2, 'never', '.'], // subject 不以.结尾
        'type-case': [2, 'always', 'lower-case'], // type 必须小写
        'type-empty': [2, 'never'], // type 不能为空
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']], // type 必须在枚举中
    }
}