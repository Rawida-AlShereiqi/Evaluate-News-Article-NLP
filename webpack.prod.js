const HtmlWebpackPlugin = require("html-webpack-plugin"),
 { CleanWebpackPlugin } = require('clean-webpack-plugin'),
 CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
 MiniCssExtractPlugin = require("mini-css-extract-plugin"),
 TerserPlugin = require("terser-webpack-plugin"),
 webpack = require("webpack"),
 path = require("path");


module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  devtool: 'hidden-source-map',
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
        use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
    }),
    new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css'
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
    minimize: true,
  },

 
   


};