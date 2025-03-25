module.exports = {
  defaultSeverity: "warning", // 默认警告
  plugins: ["stylelint-scss"], // 插件
  rules: {
    /**
     * Possible errors
     * @link https://stylelint.io/user-guide/rules/#possible-errors
     */
    "at-rule-no-unknown": null, // 禁止使用未知的@规则
    "scss/at-rule-no-unknown": true, // scss下允许使用未知的@规则
    "block-no-empty": null, // 禁止块中出现空语句
    "color-no-invalid-hex": true, // 禁止使用无效的十六进制颜色值
    "comment-no-empty": true, // 禁止空注释
    "declaration-block-no-duplicate-properties": [
      true,
      { ignore: ["consecutive-duplicates-with-different-values"] },
    ], // 禁止声明块中出现重复的属性,忽略具有不同值语法（类型和值单位）的连续重复属性
    "declaration-block-no-shorthand-property-overrides": true, // 禁止声明块中出现简写属性的覆盖
    "font-family-no-duplicate-names": true, // 禁止字体族名称重复
    "function-calc-no-unspaced-operator": true, // 禁止在 calc() 函数中缺少空格
    "function-linear-gradient-no-nonstandard-direction": true, // 禁止使用非标准的方向值
    "keyframe-declaration-no-important": true, // 禁止在关键帧声明中使用!important
    "media-feature-name-no-unknown": true, // 禁止使用未知的媒体特性名称
    "no-descending-specificity": true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    "no-duplicate-at-import-rules": true, // 禁止@import规则出现重复
    "no-duplicate-selectors": true, // 禁止选择器重复
    "no-empty-source": null, // 禁止空源
    "no-invalid-double-slash-comments": true, // 禁止使用//注释
    "property-no-unknown": true, // 禁止使用未知的属性
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "local", "export"],
      },
    ], // 禁止使用未知的伪类选择器
    "selector-pseudo-element-no-unknown": true, // 禁止使用未知的伪元素选择器
    "string-no-newline": true, // 禁止字符串出现新行
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: ["rpx"],
      },
    ], // 禁止使用未知的单元

    /**
     * Stylistic issues
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    'color-hex-length': 'short', // 指定十六进制颜色的短或长表示法
    'comment-whitespace-inside': 'always', // 注释内部必须有空格
    'declaration-block-single-line-max-declarations': 1, // 限制声明块中的单行声明数量为1
    'length-zero-no-unit': true, // 禁止零长度单位
    'max-line-length': 100, // 限制行长度为100
    'selector-max-id': 0, // 禁用id选择器
    /**
     * stylelint-scss rules
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    'scss/double-slash-comment-whitespace-inside': 'always', // 注释内部必须有空格
  },
};
