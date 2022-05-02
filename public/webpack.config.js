const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        app: './src/index.js',
        aboutme: './src/aboutme.js',
        contact: './contact.js',
        posts: './src/posts.js'
    },
    
    watch: true,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "./index.html"
        }),
        new HtmlWebpackPlugin({
            template: "aboutme.html",
            filename: "./aboutme.html"
        }),
        new HtmlWebpackPlugin({
            template: "contact.html",
            filename: "./contact.html"
        }),
        new HtmlWebpackPlugin({
            template: "posts.html",
            filename: "./posts.html"
        })
    ]
}