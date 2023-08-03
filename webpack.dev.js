const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require("./webpack.common")
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: 'development', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "images/[name][ext]",
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/indexTemplate.html" 
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
});
