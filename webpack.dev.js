const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development', 
  devtool: 'inline-source-map', 
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css', 
    chunkFilename: '[id].css'
  })], 
  module: {
    rules: [
      {
        test: /\/(sc|c)ss$/, 
        use: [
          {
            loader: MiniCssExtractPlugin.loader, 
            options: {
              hmr: true
            }, 
          }, 
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  }, 
  devServer: {
    contentBase: './dist'
  }
});