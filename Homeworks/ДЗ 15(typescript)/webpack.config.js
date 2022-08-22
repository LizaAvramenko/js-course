const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    mode: 'development',
    entry: './src/ts/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new miniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [miniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test:  /\.ts$/i,
            use: 'ts-loader',
            exclude: /node_modules/,
          }
        ],
      },

}

module.exports = config