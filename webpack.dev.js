const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require("./webpack.common")
const { merge } = require("webpack-merge");

module.exports = merge(common, { //merge what is in common to here
  mode: 'development', //change to production for finish product
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "images/[name][ext]",
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/indexTemplate.html" //main html
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
