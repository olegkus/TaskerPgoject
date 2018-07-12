const path = require('path');

// const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    context: path.resolve(__dirname, 'src'),
    entry: {
        home: './js/index.js',
        about: './js/about.js',
        table: './js/table.js',
        model: './js/model.js',
        login: './js/login.js'
        
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js'
        //library: '[name]'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("[path][name].css")
    ],

    optimization:{
// todo: SplitChunksPlugin
    },

    watch: true ,

    // devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null

    module: {
         rules: [{
                 test: /\.js$/,
                 use: 'babel-loader'
             },
             {
                 test: /\.(png|jpg|)$/,
                 use: 'file?name=[path][name].[ext]'
             },
             {
                 test: /\.scss$/,
                 use: ExtractTextPlugin.extract({
                     fallback: "style-loader",
                     use: [
                         "style-loader", // creates style nodes from JS strings
                         "css-loader", // translates CSS into CommonJS
                         "sass-loader" // compiles Sass to CSS
                     ]
                 })
             }

         ]
        
    }
};