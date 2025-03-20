module.exports = {
    root: true,
    extends: [],
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false, // 指定是否需要 ESLint 配置文件
        ecamVersion: 'latest',
        sourceType: 'module', // esm
        ecamFetures: {
            globalReturn: false, // 控制是否允许在全局作用域中使用 return 语句
            impliedStrict: true, // 指定是否启用严格模式
            jsx: true // 指定是否支持 JSX 语法        
        }
    }
}