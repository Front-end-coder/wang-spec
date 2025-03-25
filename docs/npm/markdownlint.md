---
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: 澄怀
  link: https://github.com/encode-studio-fe/fe-spec
---

# wang-markdownlint-config

:::tip
文档 规范支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。
:::

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install wang-markdownlint-config markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "wang-markdownlint-config"
}
```
