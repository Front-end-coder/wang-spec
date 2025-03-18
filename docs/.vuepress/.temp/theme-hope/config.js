import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/leetcode/wang-spec/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_a2426fa59a3e03274c200bf8884d4ab1/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+plugin-catalog@2._ad817b7ed21f2741487247179acce187/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.8_8e9a448faf65afc1c436038eab48f15d/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.8_8e9a448faf65afc1c436038eab48f15d/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.8_8e9a448faf65afc1c436038eab48f15d/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/leetcode/wang-spec/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_a2426fa59a3e03274c200bf8884d4ab1/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);


  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
