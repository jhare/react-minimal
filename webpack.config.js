const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'axios async walkthru',
      template: 'index.html'
    })
  ],

  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
};
