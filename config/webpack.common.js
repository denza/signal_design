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
        // { from: 'src/images/favicon', to: 'images/favicon' },
        { from: 'src/images/graph', to: 'images/graph' },
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
      title: 'Dashboard',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/admin_main.html', // template file
      filename: 'index.html', // output file
      base: '/',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Details',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/details.html', // template file
      filename: 'details/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'List',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/list.html', // template file
      filename: 'list/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Create new',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/new.html', // template file
      filename: 'new/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Update',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/update.html', // template file
      filename: 'update/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Login',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/login.html', // template file
      filename: 'login/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Forgot password',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/forgot-password.html', // template file
      filename: 'forgot-password/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Dashboard empty',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/dashboard-empty.html', // template file
      filename: 'states/dashboard-empty/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'List empty',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/list-empty.html', // template file
      filename: 'states/list-empty/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'User create',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/user-add.html', // template file
      filename: 'user-add/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'User update',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/user-update.html', // template file
      filename: 'user-update/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'User password update',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/user-password-update.html', // template file
      filename: 'user-password-update/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Form elements',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/forms.html', // template file
      filename: 'ui/forms/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Other elements',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/elements.html', // template file
      filename: 'ui/elements/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Modals',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/modals.html', // template file
      filename: 'ui/modals/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Notifications toast',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/toast.html', // template file
      filename: 'ui/toast/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Simple text',
      favicon: paths.src + '/images/favicon/favicon.ico',
      template: paths.src + '/views/admin/simple-text.html', // template file
      filename: 'simple-text/index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    // new HtmlWebpackPartialsPlugin({
    //   path: path.join(__dirname, '../src/views/htmlPartials/body/footer.html'),
    //   location: 'footer',
    //   template_filename: [
    //     'index.html',
    //     'about.html',
    //     'contact.html',
    //     'blog-post.html',
    //     'blog-list.html',
    //     'product.html',
    //     'hero.html',
    //   ],
    //   options: {
    //     appName: '1403.link',
    //   },
    // }),
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
