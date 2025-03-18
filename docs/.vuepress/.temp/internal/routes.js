export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/coding/", { loader: () => import(/* webpackChunkName: "coding_index.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/coding/index.html.js"), meta: {"title":"Coding"} }],
  ["/coding/css.html", { loader: () => import(/* webpackChunkName: "coding_css.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/coding/css.html.js"), meta: {"title":"CSS 编码规范"} }],
  ["/coding/html.html", { loader: () => import(/* webpackChunkName: "coding_html.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/coding/html.html.js"), meta: {"title":"HTML 编码规范"} }],
  ["/coding/typescript.html", { loader: () => import(/* webpackChunkName: "coding_typescript.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/coding/typescript.html.js"), meta: {"title":"TypeScript 编码规范"} }],
  ["/coding/javascript.html", { loader: () => import(/* webpackChunkName: "coding_javascript.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/coding/javascript.html.js"), meta: {"title":"JavaScript 编码规范"} }],
  ["/coding/node.html", { loader: () => import(/* webpackChunkName: "coding_node.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/coding/node.html.js"), meta: {"title":"Node 编码规范"} }],
  ["/engineering/changelog.html", { loader: () => import(/* webpackChunkName: "engineering_changelog.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/engineering/changelog.html.js"), meta: {"title":"CHANGELOG 规范"} }],
  ["/engineering/doc.html", { loader: () => import(/* webpackChunkName: "engineering_doc.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/engineering/doc.html.js"), meta: {"title":"文档 规范"} }],
  ["/engineering/git.html", { loader: () => import(/* webpackChunkName: "engineering_git.html" */"D:/leetcode/wang-spec/docs/.vuepress/.temp/pages/engineering/git.html.js"), meta: {"title":"Git 规范"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
