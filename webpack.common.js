const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

const prodMode = process.env.NODE_ENV === 'production'

console.log(prodMode)

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: ['htmllint-loader', 'html-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // only enable hot in development
                            hmr: process.env.NODE_ENV === 'development',
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true,
                            publicPath: '/',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            //property tells Webpack that class names needs to be obfuscated
                            modules: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                exclude: /node_modules/,
                use: ['file-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ]
    
}