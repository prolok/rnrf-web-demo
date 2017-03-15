const path = require('path')
const webpack = require('webpack')

var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: ['whatwg-fetch', "./index.js"],
    output: {
        path: path.resolve(__dirname, "web"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                loader: 'url-loader',
                query: { name: '[name].[hash:16].[ext]' }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js"],
        alias: {
            'react-native': 'react-native-web',
            'react-native-experimental-navigation': path.resolve(__dirname, "custom_modules/react-native-experimental-navigation")
        }
    }
}
