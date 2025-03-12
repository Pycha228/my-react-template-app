const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Очищает папку dist перед каждой сборкой
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Обрабатывает JS и JSX файлы
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Обрабатывает CSS файлы
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/, // Обрабатывает SCSS файлы
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Использует HTML как шаблон
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Извлекает CSS в отдельный файл
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Папка для статики
        },
        compress: false, // Сжатие
        port: 3000, // Порт
        open: true, // Автоматически открывать браузер
        hot: true, // Включение Hot Module Replacement (HMR)
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Автоматическое разрешение расширений
    },
    mode: 'development', // Режим разработки
};
