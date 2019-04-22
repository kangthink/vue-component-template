var path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
var webpack = require('webpack')

//////////  Change Here   ///////////
// Use kebab-case
const componentName = 'sample-comp'
////////////////////////////////////

module.exports = {
  mode: 'development',
  entry: {
    [componentName]: './examples/commonjs/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devtool: 'eval-source-map'
}
