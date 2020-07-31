const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = merge(common, {
    context: __dirname,
    mode: 'production',
    // options related to how webpack emits results
    entry: "./src/index.js",
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
        filename: "main.bundle.js", // string
        publicPath: '/', // string
    // the url to the output directory resolved relative to the HTML page
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },


})