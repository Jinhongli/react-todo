const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, './src/app.js'),
    dist: path.join(__dirname, './asserts'),
    contentBase: path.join(__dirname, './asserts'),
}

module.exports = {
    entry: {
        app: PATHS.app,
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[chunkhash:8]![name].js',
        path: PATHS.dist
    },
    devServer: {
        contentBase: PATHS.contentBase
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react']                        
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'] // 指定公共 bundle 的名字。
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['manifest', 'vendor', 'app']
        }),
    ]
}