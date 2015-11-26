/* eslint-disable */

module.exports = {
  name: "server-side rendering",
  entry: './server/page.js',
  target: "node",
  output: {
    filename: "build/server/page.generated.js",
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
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
};
