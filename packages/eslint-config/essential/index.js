module.exports = {
  extends: [
    '../index.js',
    './rules/set-style-to-warn.js',
    './rules/blacklist.js',
    './rules/es6-blacklist.js',
  ].map(require.resolve),
};
