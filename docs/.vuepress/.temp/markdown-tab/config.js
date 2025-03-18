import { CodeTabs } from "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+plugin-markdown-t_467c530f2f0f28dc926b91858e19413f/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+plugin-markdown-t_467c530f2f0f28dc926b91858e19413f/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+plugin-markdown-t_467c530f2f0f28dc926b91858e19413f/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
