/**
 * Webpack Documentation: https://webpack.js.org/
 * 
 * The reasons I used Webpack instead of just linking scripts with a CDN are 
 * 1) I wanted to learn about bundlers and Webpack
 * 2) I can easily modularize and test different prototypes and APIs in one repository
 * 3) Environment Variables
 * 4) HTTPS server which is required by several web-based AR libraries
 * 5) Cleaner Code
 * 6) I had hoped to delpoy a full-stack AR experience by the end of the Summer and having everything bundled from the start seemed nice
 * 
 * This is a work in progress so please excuse if any of the configuration is not optimal, I appreciate any feedback!
 */ 


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
        table_top: path.resolve(__dirname, 'src/entries/table_top.js'), // A-Frame & WebXR: Table Top Prototype with hit-testing
        three_testing: path.resolve(__dirname, 'src/entries/three_testing.js'), // three.js testing environment
        maps_ar: path.resolve(__dirname, 'src/entries/maps_ar.js'), // AR.js: marker-based prototype for different maps 
        mapbox_testing: path.resolve(__dirname, 'src/entries/mapbox_testing.js')   // GL JS API testing environment
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./[name]/[name].js",
        clean: true, // Outputs only the bundles in use, deletes the others from dist folder
    },
    /**
     * Simplifies the creation of HTML pages and allows you to specify entries/chunks, HTML templates, and other parameters
     * Read more on HTMLWebpackPlugins here: https://webpack.js.org/plugins/html-webpack-plugin/
     */
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'AR.js: Marker-Based AR',
            filename: 'index.html',
            template: 'src/templates/marker_template.html',
            chunks: ["bundle"],
        }),
        new HtmlWebpackPlugin({
            title: 'Tabletop Prototype',
            filename: 'tabletop.html',
            template: 'src/templates/table_top_template.html',
            chunks: ["table_top"],
        }),
        new HtmlWebpackPlugin({
            title: 'Three.js Testing Environment',
            filename: 'threejs.html',
            template: 'src/templates/threejs_template.html',
            chunks: ["three_testing"],
        }),
        new HtmlWebpackPlugin({
            title: 'Map AR',
            filename: 'mapar.html',
            template: 'src/templates/marker_template.html',
            chunks: ["maps_ar"],
        }),
        // Can Disable to save on API Requests
        new HtmlWebpackPlugin({
            title: 'Mapbox Rendering',
            filename: 'mapbox.html',
            template: 'src/templates/mapbox_template.html',
            chunks: ["mapbox_testing"],
        })
    ],
    module: {
        /**
         * Loaders help with bundling static assets
         * Read more on loaders here: https://webpack.js.org/loaders/
         */
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