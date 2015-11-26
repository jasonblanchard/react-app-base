/* eslint-disable */
var webpack = require('webpack');

var hot = / --hot/.test(process.env.npm_lifecycle_script);

var configs = [
  {
    devtool: 'inline-source-map',
    entry: [
       './app/client/entry',
    ],
    output: {
      path: __dirname + '/public/js',
      filename: 'app.js',
      publicPath: 'http://localhost:8082/js/'
    },
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
            'style',
            'css',
            'autoprefixer?{"browsers":["> 5%","last 2 versions","ie 8"]}',
            'sass?includePaths[]=./node_modules'
          ]
        },
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
  }
];

if (!hot) {
  configs.push({
    name: "server-side rendering",
    entry: './server/page.js',
    target: "node",
    output: {
      filename: "build/server/page.compiled.js",
      libraryTarget: "commonjs2"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.s?css$/,
          loader: 'null'
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json']
    },
  })
}

module.exports = configs;
