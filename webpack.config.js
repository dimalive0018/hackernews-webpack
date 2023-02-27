const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        view: './src/view.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Applicazione',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        port: 1000
    }
}