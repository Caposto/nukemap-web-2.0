const path = require('path')
const fs = require('fs')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    /**
     * Entry specify the scripts that each page uses and establishes the beginning of a dependecy tree
     * All required modules and functions are imported into the entry
     * Multiple entries or "chunks" allow different scripts to be minified and outputted to a webpage
     * Read more here: https://webpack.js.org/concepts/entry-points/
     */
    entry: {
        // FIXME: Create Main Page with buttons that redirect to each page
        bundle: path.resolve(__dirname, 'src/entries/index.js'), // AR.js: marker-based prototype for mushroom cloud and 
        table_top: path.resolve(__dirname, 'src/entries/table.js'), // A-Frame & WebXR: Table Top Prototype with hit-testing
        three_testing: path.resolve(__dirname, 'src/entries/cloud.js'), // three.js testing environment
        maps_ar: path.resolve(__dirname, 'src/entries/indexMap.js'), // AR.js: marker-based prototype for different maps 
        mapbox_testing: path.resolve(__dirname, 'src/entries/map.js')   // GL JS API testing environment
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'AR.js: Marker-Based AR',
            filename: 'index.html',
            template: 'src/templates/marker.html',
            chunks: ["bundle"],
        }),
        new HtmlWebpackPlugin({
            title: 'Three.js Testing Environment',
            filename: 'mushroom.html',
            template: 'src/templates/three.html',
            chunks: ["three_testing"],
        }),
        new HtmlWebpackPlugin({
            title: 'Tabletop',
            filename: 'tabletop.html',
            template: 'src/templates/table.html',
            chunks: ["table_top"],
        }),
        new HtmlWebpackPlugin({
            title: 'Map AR',
            filename: 'mapar.html',
            template: 'src/templates/marker.html',
            chunks: ["maps_ar"],
        }),
        // DISABLED ENTRY SO NOT TO WASTE API REQUESTS
        new HtmlWebpackPlugin({
            title: 'Mapbox Rendering',
            filename: 'mapbox.html',
            template: 'src/templates/map.html',
            chunks: ["mapbox_testing"],
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
        // Settings to setup https dev server
        // FIXME: See instructions on how to create https folder with self signed certificates
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