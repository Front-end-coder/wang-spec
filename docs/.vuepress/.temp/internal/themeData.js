export const themeData = JSON.parse("{\"encrypt\":{},\"logo\":\"/wang-spec/logo.png\",\"repo\":\"https://github.com/Front-end-coder/wang-spec\",\"footer\":\"MIT Licensed | Copyright © 2022-present Front-end-coder\",\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\"},\"navbar\":[{\"text\":\"首页\",\"link\":\"/index.md\"},{\"text\":\"编码规范\",\"children\":[{\"text\":\"HTML 编码规范\",\"link\":\"/coding/html.md\"},{\"text\":\"CSS 编码规范\",\"link\":\"/coding/css.md\"},{\"text\":\"JavaScript 编码规范\",\"link\":\"/coding/javascript.md\"},{\"text\":\"Node 编码规范\",\"link\":\"/coding/node.md\"},{\"text\":\"Typescript 编码规范\",\"link\":\"/coding/typescript.md\"}]},{\"text\":\"工程规范\",\"children\":[{\"text\":\"Git 规范\",\"link\":\"/engineering/git.md\"},{\"text\":\"文档规范\",\"link\":\"/engineering/doc.md\"},{\"text\":\"CHANGELOG 规范\",\"link\":\"/engineering/changelog.md\"}]}],\"sidebar\":{\"/\":[{\"text\":\"编码规范\",\"children\":[{\"text\":\"HTML 编码规范\",\"link\":\"/coding/html.md\"},{\"text\":\"CSS 编码规范\",\"link\":\"/coding/css.md\"},{\"text\":\"JavaScript 编码规范\",\"link\":\"/coding/javascript.md\"},{\"text\":\"Node 编码规范\",\"link\":\"/coding/node.md\"},{\"text\":\"Typescript 编码规范\",\"link\":\"/coding/typescript.md\"}]},{\"text\":\"工程规范\",\"children\":[{\"text\":\"Git 规范\",\"link\":\"/engineering/git.md\"},{\"text\":\"文档规范\",\"link\":\"/engineering/doc.md\"},{\"text\":\"CHANGELOG 规范\",\"link\":\"/engineering/changelog.md\"}]}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
