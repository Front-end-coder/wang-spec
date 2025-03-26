import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as n,o as a}from"./app-BysR-paT.js";const s={};function r(l,t){return a(),e("div",null,t[0]||(t[0]=[n(`<h1 id="wang-lint-cli" tabindex="-1"><a class="header-anchor" href="#wang-lint-cli"><span>wang-lint-cli</span></a></h1><p><code>wang-lint-cli</code> 是<a href="https://github.com/Front-end-coder/wang-spec/" target="_blank" rel="noopener noreferrer">前端编码规范工程化</a>的配套 Lint 工具，可以为项目一键接入规约、一键扫描和修复规约问题，保障项目的编码规范和代码质量。</p><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>我们引入了多个业界流行的 Linter 作为《阿里巴巴前端规约》的配套，并根据规约内容定制了规则包，它们包括：</p><table><thead><tr><th>规约</th><th>Lint 工具</th><th>npm 包</th></tr></thead><tbody><tr><td>JavaScript 编码规范 <br> TypeScript 编码规范 <br> Node 编码规范</td><td><a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a></td><td><a href="https://www.npmjs.com/package/eslint-config-wang" target="_blank" rel="noopener noreferrer">eslint-config-wang</a></td></tr><tr><td>CSS 编码规范</td><td><a href="https://stylelint.io/" target="_blank" rel="noopener noreferrer">stylelint</a></td><td><a href="https://www.npmjs.com/package/wang-stylelint-config" target="_blank" rel="noopener noreferrer">wang-stylelint-config</a></td></tr><tr><td>Git 规范</td><td><a href="https://commitlint.js.org/#/" target="_blank" rel="noopener noreferrer">commitlint</a></td><td><a href="https://www.npmjs.com/package/wang-commitlint-config" target="_blank" rel="noopener noreferrer">wang-commitlint-config</a></td></tr><tr><td>文档规范</td><td><a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noopener noreferrer">markdownlint</a></td><td><a href="https://www.npmjs.com/package/wang-markdownlint-config" target="_blank" rel="noopener noreferrer">wang-markdownlint-config</a></td></tr></tbody></table><p>可以看到这些 <code>Linter</code> 和规则包众多且零散，全部安装它们会给项目增加十几个依赖，接入和升级成本都比较高。</p><p><code>wang-lint-cli</code> 收敛屏蔽了这些依赖和配置细节，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规约的成本。</p><h2 id="cli-使用" tabindex="-1"><a class="header-anchor" href="#cli-使用"><span>CLI 使用</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>在终端执行：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wang-lint-cli</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装完成后，可执行 <code>wang-lint-cli -h</code> 以验证安装成功。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><h4 id="wang-lint-cli-init-一键接入" tabindex="-1"><a class="header-anchor" href="#wang-lint-cli-init-一键接入"><span><code>wang-lint-cli init</code>：一键接入</span></a></h4><p>在项目根目录执行 <code>wang-lint-cli init</code>，即可一键接入规约，为项目安装规约 <code>Lint</code> 所需的依赖和配置。</p><p>具体会做以下事情：</p><ul><li>安装各种依赖：包括 <code>Linter</code> 依赖，如 <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a>、<a href="https://stylelint.io/" target="_blank" rel="noopener noreferrer">stylelint</a>、<a href="https://commitlint.js.org/#/" target="_blank" rel="noopener noreferrer">commitlint</a>、<a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noopener noreferrer">markdownlint</a> 等；配置依赖，如 <a href="https://www.npmjs.com/package/eslint-config-wang" target="_blank" rel="noopener noreferrer">eslint-config-wang</a>、<a href="https://www.npmjs.com/package/wang-stylelint-config" target="_blank" rel="noopener noreferrer">wang-stylelint-config</a>、<a href="https://www.npmjs.com/package/wang-commitlint-config" target="_blank" rel="noopener noreferrer">wang-commitlint-config</a>、<a href="https://www.npmjs.com/package/wang-markdownlint-config" target="_blank" rel="noopener noreferrer">wang-markdownlint-config</a> 等</li><li>写入各种配置文件，包括： <ul><li><code>.eslintrc.js</code>、<code>.eslintignore</code>：ESLint 配置（继承 <code>eslint-config-wang</code>）及黑名单文件</li><li><code>.stylelintrc.js</code>、<code>.stylelintignore</code>：stylelint 配置（继承 <code>wang-stylelint-config</code>）及黑名单文件</li><li><code>commitlint.config.js</code>：commitlint 配置（继承 <code>wang-commitlint-config</code>）</li><li><code>.markdownlint.json</code>、<code>.markdownlintignore</code>：<code>markdownlint</code> 配置及黑名单文件</li><li><code>.prettierrc.js</code>：符合规约的 <a href="https://prettier.io/docs/en/configuration.html" target="_blank" rel="noopener noreferrer">Prettier 配置</a></li><li><code>.editorconfig</code>：符合规约的 <a href="https://editorconfig.org/" target="_blank" rel="noopener noreferrer">editorconfig</a></li><li><code>.vscode/extensions.json</code>：写入规约相关的 <a href="https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions" target="_blank" rel="noopener noreferrer">VSCode 插件推荐</a>，包括 <code>ESLint</code>、<code>stylelint</code>、<code>markdownlint</code>、<code>prettier</code> 等</li><li><code>.vscode/settings.json</code>：写入规约相关的 <a href="https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations" target="_blank" rel="noopener noreferrer">VSCode 设置</a>，设置 <code>ESLint</code> 和 <code>stylelint</code> 插件的 <code>validate</code> 及<strong>保存时自动运行 fix</strong>，如果选择使用 <code>Prettier</code>，会同时将 <code>prettier-vscode</code> 插件设置为各前端语言的 defaultFormatter，并配置<strong>保存时自动格式化</strong></li><li><code>wang-lint-cli.config.js</code>wang-lint-cli 包的一些配置，如启用的功能等</li></ul></li><li>配置 git commit 卡口：使用 <a href="https://www.npmjs.com/package/husky" target="_blank" rel="noopener noreferrer">husky</a> 设置代码提交卡口，在 git commit 时会运行 <code>wang-lint-cli commit-file-scan</code> 和 <code>wang-lint-cli commit-msg-scan</code> 分别对提交文件和提交信息进行规约检查。<code>wang-lint-cli commit-file-scan</code> 默认仅对 error 问题卡口，如果你想对 warn 问题也卡口，可以增加 <code>--strict</code> 参数以开启严格模式</li></ul><blockquote><p>注 1：如果项目已经配置过 ESLint、stylelint 等 Linter，执行 <code>wang-lint-cli init</code> 将会提示存在冲突的依赖和配置，并在得到确认后进行覆盖：</p><p>注 2：如果项目的 .vscode/ 目录被 .gitignore 忽略，可以在拉取项目后单独执行 <code>wang-lint-cli init --vscode</code> 命令写入 <code>.vscode/extensions.json</code> 和 <code>.vscode/settings.json</code> 配置文件</p></blockquote><h2 id="node-js-api-使用" tabindex="-1"><a class="header-anchor" href="#node-js-api-使用"><span>Node.js API 使用</span></a></h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wang-lint-cli</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --save</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h3><h4 id="init-初始化" tabindex="-1"><a class="header-anchor" href="#init-初始化"><span>init：初始化</span></a></h4><ul><li>wangLint.init(config)：将项目一键接入规约，效果等同于 <code>wang-lint-cli init</code></li></ul><p>示例：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> wangLint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    eslintType</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;react&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enableESLint</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enableStylelint</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enableMarkdownlint</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enablePrettier</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    disableNpmInstall</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>config 参数如下：</p><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>cwd</td><td>string</td><td>-</td><td>项目绝对路径</td></tr><tr><td>eslintType</td><td>ESLintType</td><td>-</td><td>语言和框架类型，如果不配置，等同于 wang-lint-cli init，控制台会出现选择器，如果配置，控制台就不会出现选择器</td></tr><tr><td>enableESLint</td><td>boolean</td><td>true</td><td>是否启用 ESLint，如果不配置默认值为 true，即默认启用 ESLint</td></tr><tr><td>enableStylelint</td><td>boolean</td><td>-</td><td>是否启用 stylelint，如果不配置，等同于 wang-lint-cli init，控制台会出现选择器，如果配置，控制台就不会出现选择器</td></tr><tr><td>enableMarkdownlint</td><td>boolean</td><td>-</td><td>是否启用 markdownlint，如果不配置，等同于 wang-lint-cli init，控制台会出现选择器，如果配置，控制台就不会出现选择器</td></tr><tr><td>enablePrettier</td><td>boolean</td><td>-</td><td>是否启用 Prettier</td></tr><tr><td>disableNpmInstall</td><td>boolean</td><td>false</td><td>是否禁用自动在初始化完成后安装依赖</td></tr></tbody></table><h5 id="eslinttype" tabindex="-1"><a class="header-anchor" href="#eslinttype"><span>ESLintType</span></a></h5><ul><li><code>default</code>: JavaScript 项目（未使用 React 和 Vue 的 JS 项目）</li><li><code>react</code>: JavaScript + React 项目</li><li><code>vue</code>: JavaScript + Vue 项目</li><li><code>typescript/default</code>: TypeScript 项目（未使用 React 和 Vue 的 TS 项目）</li><li><code>typescript/react</code>: TypeScript + React 项目</li><li><code>typescript/vue</code>: TypeScript + Vue 项目</li><li><code>es5</code>: ES5 及之前版本的 JavaScript 老项目</li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p><code>wang-lint-cli</code> 基于一份配置进行扫描（但你也可以零配置使用），支持的配置参数有：</p><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>enableESLint</td><td>boolean</td><td>true</td><td>是否启用 ESLint</td></tr><tr><td>enableStylelint</td><td>boolean</td><td>true</td><td>是否启用 stylelint</td></tr><tr><td>enableMarkdownlint</td><td>boolean</td><td>true</td><td>是否启用 markdownlint</td></tr><tr><td>enablePrettier</td><td>boolean</td><td>-</td><td>是否启用 Prettier</td></tr><tr><td>eslintOptions</td><td>ESLint.Options</td><td>-</td><td>ESLint 配置项，若未设置将使用执行目录下或内置的默认 eslintrc 和 eslintignore 进行扫描</td></tr><tr><td>stylelintOptions</td><td>stylelint.LinterOptions</td><td>-</td><td>stylelint 配置项，若未设置将使用执行目录下或内置的默认 stylelintrc 和 stylelintignore 进行扫描</td></tr><tr><td>markdownlintOptions</td><td>markdownlint.Options</td><td>-</td><td>markdownlint 配置项，若未设置将使用执行目录下或内置的默认 markdownlint 配置文件进行扫描</td></tr></tbody></table><p><code>wang-lint-cli</code> 会读取执行目录下的 <code>wang-lint-cli.config.js</code> 作为配置文件。<code>wang-lint-cli init</code> 会在执行目录下新增如下的 <code>wang-lint-cli.config.js</code> 文件：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  enableESLint</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  enableStylelint</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  enableMarkdownlint</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  enablePrettier</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35)]))}const h=i(s,[["render",r]]),c=JSON.parse('{"path":"/cli/wang-lint-cli.html","title":"wang-lint-cli","lang":"en-US","frontmatter":{"categories":["脚手架规范"],"tags":["脚手架规范"],"author":{"name":"澄怀","link":"https://github.com/encode-studio-fe/fe-spec"}},"git":{"createdTime":1742897280000,"updatedTime":1742897280000,"contributors":[{"name":"wangcheng","username":"wangcheng","email":"wangcheng@yaofangwang.com","commits":1,"url":"https://github.com/wangcheng"}]},"readingTime":{"minutes":4.64,"words":1391},"filePathRelative":"cli/wang-lint-cli.md","localizedDate":"March 25, 2025","excerpt":"\\n<p><code>wang-lint-cli</code> 是<a href=\\"https://github.com/Front-end-coder/wang-spec/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">前端编码规范工程化</a>的配套 Lint 工具，可以为项目一键接入规约、一键扫描和修复规约问题，保障项目的编码规范和代码质量。</p>\\n<h2>背景</h2>\\n<p>我们引入了多个业界流行的 Linter 作为《阿里巴巴前端规约》的配套，并根据规约内容定制了规则包，它们包括：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>规约</th>\\n<th>Lint 工具</th>\\n<th>npm 包</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>JavaScript 编码规范 <br> TypeScript 编码规范 <br> Node 编码规范</td>\\n<td><a href=\\"https://eslint.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ESLint</a></td>\\n<td><a href=\\"https://www.npmjs.com/package/eslint-config-wang\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">eslint-config-wang</a></td>\\n</tr>\\n<tr>\\n<td>CSS 编码规范</td>\\n<td><a href=\\"https://stylelint.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">stylelint</a></td>\\n<td><a href=\\"https://www.npmjs.com/package/wang-stylelint-config\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">wang-stylelint-config</a></td>\\n</tr>\\n<tr>\\n<td>Git 规范</td>\\n<td><a href=\\"https://commitlint.js.org/#/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">commitlint</a></td>\\n<td><a href=\\"https://www.npmjs.com/package/wang-commitlint-config\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">wang-commitlint-config</a></td>\\n</tr>\\n<tr>\\n<td>文档规范</td>\\n<td><a href=\\"https://github.com/DavidAnson/markdownlint\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">markdownlint</a></td>\\n<td><a href=\\"https://www.npmjs.com/package/wang-markdownlint-config\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">wang-markdownlint-config</a></td>\\n</tr>\\n</tbody>\\n</table>"}');export{h as comp,c as data};
