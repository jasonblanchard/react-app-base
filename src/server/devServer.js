import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../../webpack.config.dev';
import appServer from './index';

const webpackServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: false,
});

const devServer = express();
webpackServer.use('/', appServer);

webpackServer.listen(8081, 'localhost', function listen() {});
