import { hasGlobalComponent } from "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.8_8e9a448faf65afc1c436038eab48f15d/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/leetcode/wang-spec/node_modules/.pnpm/vuepress-plugin-components@_261fe4299b5103419110f5c8c0f8853c/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.8_8e9a448faf65afc1c436038eab48f15d/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
