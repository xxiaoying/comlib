const config = require('./base.config.js');
const common = require('./webpack.common.js');
const utils = require('./utils.js');

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = merge(common, {
    entry: {
        main: './src/main.js',
    },
    // 对调试源码(debug)和运行基准测试(benchmark tests)很有帮助
    // devtool: 'source-map', //
    // 出口文件(js)
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('scripts/[name].[chunkhash:8].js'),
        chunkFilename: utils.assetsPath('scripts/[name].[chunkhash:8].js'),
        publicPath: config.build.assetsPublicPath
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // 这里可以指定一个 publicPath
                        // 默认使用 webpackOptions.output中的publicPath
                        publicPath: '/'
                    }
                },
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ]
        }, ]
    },
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('styles/[name].[contenthash:8].css'),
            chunkFilename: utils.assetsPath('styles/[name].[contenthash:8].css'),
        }),
        //打包
        new FileManagerPlugin({
            onEnd: {
                delete: [
                    './build/comlib.tar.gz'
                ],
                archive: [
                    { source: `./build/dist`, destination: './build/comlib.tar.gz' }
                ]
            }
        })
    ]
});