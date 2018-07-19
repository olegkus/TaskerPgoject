const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index:'./js/index.js'
    },
    // entry: {
    //     //login: './js/login.js',
    //     index: './js/index.js'
    // },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },

            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },

            {
                test: /\.jpg$/,
                use: 'file-loader?name=[path][name].[ext]'
            }
           


        ]
    },
    watch: true ,

    plugins: [
        new HtmlWebpackPlugin({
            template: 'html/index.html'
        })
    ]


}