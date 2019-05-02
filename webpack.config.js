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
    module:{
        rules:[
            {//ES6、JSX处理
                test:/(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query:
                    {
                        presets:["env", "react"],
                        plugins: [
                            [
                                "import",
                                {libraryName: "antd", style: 'css'}
                            ] //antd按需加载
                        ]
                    },
            },

            {//CSS处理
                test: /\.css$/,
                loader: "style-loader!css-loader?modules",
                exclude: /node_modules/,
            },

            {//antd样式处理
              test:/\.css$/,
              exclude:/src/,
              use:[
                  { loader: "style-loader",},
                  {
                      loader: "css-loader",
                      options:{
                          importLoaders:1
                      }
                  }
              ]
            },
        ]
    },
    plugins: [
        extractCSS,
        extractLESS
    ]
}