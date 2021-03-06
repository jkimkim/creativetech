const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        app: './src/index.js',
        aboutme: './src/aboutme.js',
        contact: './src/contact.js',
        posts: './src/post.js',
        comingsoon: './src/signin.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
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
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset",
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
            filename: "./src/index.html",
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: "aboutme.html",
            filename: "./src/aboutme.html",
            chunks:['aboutme']
        }),
        new HtmlWebpackPlugin({
            template: "contact.html",
            filename: "./src/contact.html",
            chunks:['contact']
        }),
        new HtmlWebpackPlugin({
            template: "posts.html",
            filename: "./src/posts.html",
            chunks:['posts']
        }),
        new HtmlWebpackPlugin({
            template: "comingsoon.html",
            filename: "./src/comingsoon.html",
            chunks: ['comingsoon']
        })
    ]
}