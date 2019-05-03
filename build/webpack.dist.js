var path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
var webpack = require('webpack')

//////////  Change Here   ///////////
// Use kebab-case
const componentName = 'sample-comp'

// Use pascal-case
const LibName = 'SampleComp'
////////////////////////////////////


module.exports = {
  mode: 'production',
  entry: {
    [componentName]: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].min.js',
    library: LibName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new VueLoaderPlugin()
  ],
  devtool: 'source-map'
}
