const postcssImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const postcssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [postcssImport, tailwindcss, postcssNested, autoprefixer],
  'postcss-preset-env': {
    browsers: 'last 2 versions',
  },
}
