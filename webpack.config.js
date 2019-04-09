var path=require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');
module.exports = {
    entry: {
        index:path.resolve(__dirname, './app/index.js'),
        layout:path.resolve(__dirname, './app/layout.js')
    },
    output: {
        filename: "[name].js",
        path: __dirname + '/build'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react','es2015'],
                    "plugins":[
                        ["import",{"libraryName":"antd","style":true}]
                    ]
                }
            },
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            { 
                test: /\.less$/, 
                use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            }
        ]
    },
    plugins: [
        extractCSS,
        extractLESS
    ]
}