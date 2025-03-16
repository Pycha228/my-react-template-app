// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         clean: true, // Очищает папку dist перед каждой сборкой
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/, // Обрабатывает JS и JSX файлы
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                 },
//             },
//             {
//                 test: /\.css$/, // Обрабатывает CSS файлы
//                 use: [MiniCssExtractPlugin.loader, 'css-loader'],
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             modules: true,
//                         },
//                     },
//                 ],
//             },
//             {
//                 test: /\.scss$/, // Обрабатывает SCSS файлы
//                 use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//             },
//         ],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './public/index.html', // Использует HTML как шаблон
//         }),
//         new MiniCssExtractPlugin({
//             filename: 'styles.css', // Извлекает CSS в отдельный файл
//         }),
//     ],
//     devServer: {
//         static: {
//             directory: path.join(__dirname, 'dist'), // Папка для статики
//         },
//         compress: false, // Сжатие
//         port: 3000, // Порт
//         open: true, // Автоматически открывать браузер
//         hot: true, // Включение Hot Module Replacement (HMR)
//     },
//     resolve: {
//         extensions: ['.js', '.jsx'], // Автоматическое разрешение расширений
//     },
//     mode: 'development', // Режим разработки
// };

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.module\.css$/, // Обрабатываем только CSS модули
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]', // Формат имени класса
                                exportLocalsConvention: 'camelCase', // Экспорт классов в camelCase
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/, // Обрабатываем обычные CSS файлы
                exclude: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: false,
        port: 3000,
        open: true,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'development',
};
