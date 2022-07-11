const path = require('path')
const fs = require('fs')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },
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