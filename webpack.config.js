const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
        'service-worker': path.resolve(__dirname, 'src/service-worker.js'),
      },
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(scss)$/,
                use: [
                    miniCss.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            excludeChunks: ['service-worker'],
        }),
        new miniCss({
            filename: 'style.css',
        }),
    ],
};
