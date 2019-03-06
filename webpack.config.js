const path  = require("path");

module.exports = {
    entry: {
        pageone : "./src/index.js",
        pagetwo : "./src/Home.js"
    },
    output :{
        path : path.resolve(__dirname,"build1"),
        filename : "[name]-[hash].[ext]"
    },
    module :{
        rules : [
            {
                test : /\.js$/,
                use : 'babel-loader'
            },
            {
                test : /\.css$/,
                use : [
                    { loader: "style-loader/url" },
                    { 
                        loader: "file-loader",
                        options: {
                            name: '[name]-[hash].[ext]',
                        },
                    }
                ]
            }
        ]
    }
}