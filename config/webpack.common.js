const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const paths = require('./paths')
const path = require('path')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Home',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/views/home.html', // template file
      filename: 'index.html', // output file
      minify: true,
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeAttributeQuotes: true,
      // },
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/views/about.html', // template file
      filename: 'about.html', // output file
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Blog Post',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/views/blog-post.html', // template file
      filename: 'blog-post.html', // output file
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Blog List',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/views/blog-list.html', // template file
      filename: 'blog-list.html', // output file
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Contact',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/views/contact.html', // template file
      filename: 'contact.html', // output file
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Product',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/views/product.html', // template file
      filename: 'product.html', // output file
      minify: true,
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, '../src/views/htmlPartials/body/footer.html'),
      location: 'footer',
      template_filename: [
        'index.html',
        'about.html',
        'contact.html',
        'blog-post.html',
        'blog-list.html',
        'product.html',
        'hero.html',
      ],
      options: {
        appName: '1403.link',
      },
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, '../src/views/htmlPartials/body/header.html'),
      location: 'header',
      template_filename: [
        'index.html',
        'about.html',
        'contact.html',
        'blog-post.html',
        'blog-list.html',
        'product.html',
        'hero.html',
        'sprite.svg',
      ],
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
