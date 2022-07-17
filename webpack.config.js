const path = require('path')
const fs = require('fs')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/entries/index.js'),
        mapbox: path.resolve(__dirname, 'src/entries/map.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'Marker AR',
            filename: 'index.html',
            template: 'src/templates/marker.html',
            chunks: ["bundle"],
        }),
        new HtmlWebpackPlugin({
            title: 'Mapbox Rendering',
            filename: 'mapbox.html',
            template: 'src/templates/map.html',
            chunks: ["mapbox"],
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"]
            },
        ],
    },
    target: 'web',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'https/cert.key')),
            cert: fs.readFileSync(path.resolve(__dirname, 'https/cert.crt')),
            ca: fs.readFileSync(path.resolve(__dirname, 'https/ca.crt'))
        },
    },
}