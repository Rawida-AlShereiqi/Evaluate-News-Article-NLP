const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["webpack-dev-server/client", "./src/client/index.js"],
  mode: "development",
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'Client',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html"
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: false,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['*/', '!api', '!api/*/'],
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
  }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },

};