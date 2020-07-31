const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    context: __dirname,
    mode: 'production',
    // options related to how webpack emits results
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
        filename: "main.bundle.js", // string
        publicPath: '/', // string
    // the url to the output directory resolved relative to the HTML page
    }

})