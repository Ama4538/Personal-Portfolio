const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader", //allows dist to access ./src/assets for img
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

};