# wang-spec

前端编码规范工程化

## 技术栈

项目搭建： lerna + pnpm
规范： commitlint + markdownlint + stylelint + eslint
测试： jest

### commitlint

```bash

pnpm i husky @commitlint/cli conventional-changelog-conventionalcommits -D -w

echo "pnpm commitlint --edit $1" > .husky/commit-msg

# 全局changelog日志生成工具
npm install -g conventional-changelog-cli
# 生成日志
conventional-changelog -p angular -i CHANGELOG.md -s
```
