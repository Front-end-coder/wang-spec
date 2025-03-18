import { hasGlobalComponent } from "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.8_03c1dc9b1b2a1f3261468d31b705b4af/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/leetcode/wang-spec/node_modules/.pnpm/@vueuse+core@12.8.2_typescript@5.8.2/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/leetcode/wang-spec/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_290978db538be0493d7785a14e36f2e4/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
