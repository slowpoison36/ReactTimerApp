var webpack = require("webpack");

module.exports = {
    entry:["script!jquery/dist/jquery.min.js",
            "script!foundation-sites/dist/js/foundation.min.js",
            "./app/app.jsx"
        ],
        externals:{
            jquery:"jQuery"
        },
        plugins:[
            new webpack.ProvidePlugin({
              "$":"jquery",
              "jQuery":"jquery"
            })
            ],
    output:{
        path:__dirname,
        filename:"./public/bundle.js"
    },
    resolve:{
        root:__dirname,
        alias:{
            Main:"app/components/Main.jsx",
            Nav:"app/components/Nav.jsx",
            CountDown:"app/components/CountDown.jsx",
            Timer:"app/components/Timer.jsx",
            applicationStyles:"app/styles/app.scss",
            Clock:"app/components/Clock.jsx",
            CountDownForm:"app/components/CountDownForm.jsx",
            Controls:"app/components/Controls.jsx"
           },
        extensions:["",".js",".jsx"]
    },
    module:{
        loaders:[
             {
                loader:"babel-loader",
                query:{
                    presets:["react","es2015","stage-0"]
                },
                test:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/
                }
            ]
        },
    devtool:"#eval-source-map"
    }
