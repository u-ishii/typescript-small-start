const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts', // 最初に読み込むスクリプト
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, // ts-loader で TS -> JS にする
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'], // import 時に省略できる拡張子
    },
    plugins: [
        new HtmlWebpackPlugin(), // 空の HTML を生成するプラグイン
    ],
}