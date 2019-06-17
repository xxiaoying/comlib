const config = require('./base.config.js');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: config.dev.assetsPublicPath
    },
    // 入口
    entry: {
        main: [
            // 'webpack-hot-middleware/client', // 热加载
            './src/main.js'
        ],
    },
    module: {
        rules: [{
            test: /\.(css|scss)(\?.*)?$/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader',
        }, ]
    },
    mode: 'development',
    // source map 配置
    // 追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置
    devtool: 'inline-source-map',
    // webpack-dev-server 配置
    // 提供一个简单的 web server，实时重新加载
    devServer: {
        contentBase: './dist',
        open: false
    }
});