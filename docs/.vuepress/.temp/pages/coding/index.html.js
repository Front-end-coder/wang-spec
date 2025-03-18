import comp from "D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/coding/index.html.vue"
const data = JSON.parse("{\"path\":\"/coding/\",\"title\":\"Coding\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Coding\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
