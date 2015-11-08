/* eslint-disable */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var hot = / --hot/.test(process.env.npm_lifecycle_script);

module.exports = {
  devtool: 'inline-source-map',
  entry: [
     './src/client/entry',
  ],
  output: {
    path: __dirname + '/public/js',
    filename: 'app.js',
    publicPath: 'http://localhost:8082/js/'
  },
  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: (hot ? 'react-hot!' : '') + 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loaders: [
          ExtractTextPlugin.extract('style'),
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
