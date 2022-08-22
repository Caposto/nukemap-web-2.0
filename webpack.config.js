const path = require('path')
const fs = require('fs')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/entries/index.js'), // AR.js marker based prototype
        mushroom: path.resolve(__dirname, 'src/entries/cloud.js'), // three.js testing ground
        table: path.resolve(__dirname, 'src/entries/table.js'), // Table Top: Hit-Testing with A-Frame and WebXR
        map: path.resolve(__dirname, 'src/entries/indexMap.js'), // Table Top AR with Mapbox
        mapbox: path.resolve(__dirname, 'src/entries/map.js')   // Plain Mapbox GL JS API Testing Ground
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
            title: 'Mushroom Cloud Model',
            filename: 'mushroom.html',
            template: 'src/templates/three.html',
            chunks: ["mushroom"],
        }),
        new HtmlWebpackPlugin({
            title: 'Tabletop',
            filename: 'tabletop.html',
            template: 'src/templates/table.html',
            chunks: ["table"],
        }),
        /* HTML Plugin for table top AR - Disabled to avoid wasting API requests
        new HtmlWebpackPlugin({
            title: 'Map AR',
            filename: 'mapar.html',
            template: 'src/templates/marker.html',
            chunks: ["map"],
        }) */
        /* DISABLED ENTRY SO NOT TO WASTE API REQUESTS
        new HtmlWebpackPlugin({
            title: 'Mapbox Rendering',
            filename: 'mapbox.html',
            template: 'src/templates/map.html',
            chunks: ["mapbox"],
        }) */
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
            {
                test: /\.(glb|gltf|patt|jpg)$/,
                use: [
                    {loader: 'file-loader',
                     options: { outputPath: 'assets'}
                    }
                ]
            }
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
        server: {
            type: 'https',
            options: {
                key: fs.readFileSync(path.resolve(__dirname, 'https/cert.key')),
                cert: fs.readFileSync(path.resolve(__dirname, 'https/cert.crt')),
                ca: fs.readFileSync(path.resolve(__dirname, 'https/ca.crt'))
            }
        },
    },
}