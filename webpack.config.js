const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    /*Entrada*/
    entry: './src/index.js',
    /*saida*/
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    /*carrega diferente tipo de arquivo*/
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
        ]
    },
    plugins:[
        /*Nome do arquivo, onde iremos gerar nosso css final*/
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new  HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
}