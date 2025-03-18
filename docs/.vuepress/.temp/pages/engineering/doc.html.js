import comp from "D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/engineering/doc.html.vue"
const data = JSON.parse("{\"path\":\"/engineering/doc.html\",\"title\":\"文档 规范\",\"lang\":\"en-US\",\"frontmatter\":{\"categories\":[\"工程规范\"],\"tags\":[\"工程规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"readingTime\":{\"minutes\":4.99,\"words\":1498},\"filePathRelative\":\"engineering/doc.md\"}")
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
