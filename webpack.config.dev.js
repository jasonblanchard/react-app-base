/* eslint-disable */
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
     'webpack/hot/only-dev-server',
     './src/client/entry',
  ],
  output: {
    path: __dirname + '/public/js',
    filename: 'app.js',
    publicPath: 'http://localhost:8081/js/'
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'react-hot',
          'babel-loader?experimental'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?{"browsers":["> 5%","last 2 versions","ie 8"]}',
          'sass?includePaths[]=./node_modules'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
}
