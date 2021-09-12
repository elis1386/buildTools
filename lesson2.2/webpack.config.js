const { resolve } = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    entry: "./js/switch.js",
    output: {
        path: resolve(__dirname, 'build'), 
        filename: "switch.[contenthash].js"  
    },
    module: {
        rules: [ 
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                }
            

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename:'[name].[contenthash].css'}),
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html') }),
        new BundleAnalyzerPlugin()

    ]
}
