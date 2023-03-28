/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};