const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode }) => {
    return {
        mode,
        output: {
            filename: 'bundle.js',
        },
        plugins: [
            new HTMLWebpackPlugin(),
            new webpack.ProgressPlugin()
        ]
    };
};
