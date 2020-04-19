const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {  
  entry: {
    app: './src/js/app.js', 
  }, 
  devServer: {
    contentBase: './dist', 
    hot: true
  }, 
  plugins: [
    new CleanWebpackPlugin(), 
     new HtmlWebpackPlugin({
       template: 'src/index.html'
     })
  ], 
  output: {
    path: path.resolve(__dirname, 'dist/'), 
    filename: 'js/[name].bundle.js', 
    publicPath: '/' 
  }, 
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          'style-loader', 
          'css-loader', 
        ]
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/, 
        loader: "file-loader", 
        options: {
          outputPath: 'images'
        }, 
      }
    ]
  }
}; 