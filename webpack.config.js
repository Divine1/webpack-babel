const path  = require("path");

module.exports = {
    entry:"./src/index.js",
    output :{
        path : path.resolve(__dirname,"build"),
        filename : "bundle.js"
    },
    module :{
        rules : [
            {
                test : /\.js$/,
                use : 'babel-loader'
            },
            {
                test : /\.css$/,
                use : [{ loader: "style-loader/url" },
                { 
                    loader: "file-loader",
                    options: {
                        name: 'stylebundle.css',
                    },
                }]
            }
        ]
    }
}