const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'examples/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'examples/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'examples/src/index.html'),
      favicon: 'examples/src/favicon.svg'
    })
  ],
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    stats: 'minimal'
  }
};
