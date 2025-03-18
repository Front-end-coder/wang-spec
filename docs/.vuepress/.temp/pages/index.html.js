import comp from "D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroText\":\"wang-spec\",\"tagline\":\"前端编码规范工程化\",\"actions\":[{\"text\":\"立刻进入 →\",\"type\":\"primary\",\"link\":\"/coding/html.md\"}],\"features\":[{\"title\":\"完善的规范生态\",\"details\":\"支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级\"},{\"title\":\"支持 Typescript\",\"details\":\"提供完整的类型注释，帮助您从 0~1 掌握完整的前端规范化\"},{\"title\":\"完整的测试用例\",\"details\":\"配套完整的测试用例，帮助您提升项目健壮性\"}]},\"readingTime\":{\"minutes\":3.62,\"words\":1086},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
