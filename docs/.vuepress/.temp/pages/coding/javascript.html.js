import comp from "D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/coding/javascript.html.vue"
const data = JSON.parse("{\"path\":\"/coding/javascript.html\",\"title\":\"JavaScript 编码规范\",\"lang\":\"en-US\",\"frontmatter\":{\"categories\":[\"编码规范\"],\"tags\":[\"编码规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"readingTime\":{\"minutes\":42.31,\"words\":12692},\"filePathRelative\":\"coding/javascript.md\"}")
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
