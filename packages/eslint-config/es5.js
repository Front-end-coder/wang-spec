module.exports = {
  root: true,
  extends: [
    './rules/base/best-practices.js',
    './rules/base/possible-errors.js',
    './rules/base/style.js',
    './rules/base/variables.js',
    './rules/es5.js',
  ].map(require.resolve),
};
