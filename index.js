const CleanCSS = require('clean-css');

module.exports = input => new CleanCSS().minify(input).styles;
