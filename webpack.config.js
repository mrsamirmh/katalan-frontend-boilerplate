const path = require('path');

// Declarations
const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const fs = require('fs');

// Get views pages
function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        // Split names and extension
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
            hash: true,
        })
    })
}

// We will call the function like this:
const htmlPlugins = generateHtmlPlugins('./src/views');

// Copyright generation
const PACKAGE = require('./package.json');
const banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | ' +
    '(c) 2019- ' + new Date().getFullYear() + '  ' + PACKAGE.author + ' | ' +
    PACKAGE.license;

module.exports = {
    entry: {main: './src/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'src/js/[name].[hash].js'
    },
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'exports-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => {
                                return [
                                    require('cssnano'),
                                    require('autoprefixer'),
                                ]
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        outputPath: '../dist/src/fonts',
                        publicPath: '../fonts'
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]',
                            outputPath: '../dist/src/img',
                            publicPath: '../img2'
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'src/css/style.[contenthash].css',
        }),
        new WebpackMd5Hash(),
        new webpack.BannerPlugin({
            banner: banner
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 994,
            proxy: 'http://localhost:8080/'
        })
    ]
        .concat(htmlPlugins),
    optimization: {
        minimizer: [
            new UglifyJsPlugin({

            })
        ]
    }
};