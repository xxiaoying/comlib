const express = require('express'); // 基于node.js提供的HTTP 工具
const webpack = require('webpack');
// webpack-dev-middleware 是一个封装器(wrapper)
// 把 webpack 处理过的文件发送到一个 webpack-dev-server
// webpack-dev-server 把它作为一个单独的 package 来使用
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.prod.js');
const compiler = webpack(config);

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.prod.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});
