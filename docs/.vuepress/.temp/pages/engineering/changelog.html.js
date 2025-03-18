import comp from "D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/engineering/changelog.html.vue"
const data = JSON.parse("{\"path\":\"/engineering/changelog.html\",\"title\":\"CHANGELOG 规范\",\"lang\":\"en-US\",\"frontmatter\":{\"categories\":[\"工程规范\"],\"tags\":[\"工程规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"readingTime\":{\"minutes\":3.82,\"words\":1147},\"filePathRelative\":\"engineering/changelog.md\"}")
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
