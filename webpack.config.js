const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    return webpackMerge(
        {
            mode,
            output: {
                filename: 'bundle.js',
            },
            plugins: [new HTMLWebpackPlugin(), new webpack.ProgressPlugin()],
        },
        modeConfig(mode),
    );
};