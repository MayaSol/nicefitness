/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'sprite-svg',
    'sprite-png',
    'object-fit-polyfill'
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    '@glidejs/glide/src/assets/sass/glide.core',
    'lightgallery.js/src/sass/lightgallery.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    'src/scss/test.scss'
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    'lightgallery.js/dist/js/lightgallery.js',
    'lg-thumbnail.js/dist/lg-thumbnail.min.js'
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/fonts/*.{woff,woff2}': 'fonts/',
    'src/img/*.{png,svg,jpg,jpeg,gif}': 'img/',
    'src/img/temp/*': 'img/temp/',
    'src/img/content/*': 'img/content/',
    'src/video/*': 'video',
    'src/pages/*.html': './',
    'src/js/Hyphenopoly_Loader.js': 'js/',
    'src/js/Hyphenopoly.js': 'js/',
    'src/js/patterns/*': 'js/patterns/',
    'src/js/script.js': 'js/',
    'node_modules/lightgallery.js/src/fonts/*': 'fonts/',
    'node_modules/lightgallery.js/src/img/*': 'img/',
    'src/js/hypenopolyMediaLoad.js': 'js/'
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
