import { GitContributors } from "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_b29716b7a07ab7249db40cba26b33538/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_b29716b7a07ab7249db40cba26b33538/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
