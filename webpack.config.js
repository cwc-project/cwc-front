const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, options) => {
const development = options.mode === 'development';
    return {
        entry: {
            main: path.resolve(__dirname, 'src', 'index.jsx'),
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: development ? 'bundle.js' : 'bundle.min.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json', ],
            alias: {
              components: path.resolve(__dirname, 'src', 'components'),
              containers: path.resolve(__dirname, 'src', 'containers'),
              reducers: path.resolve(__dirname, 'src', 'reducers'),
              action: path.resolve(__dirname, 'src', 'actions'),
              middleware: path.resolve(__dirname, 'src', 'middleware'),
            },
        },
        devServer: {
            contentBase: path.join(__dirname, 'src'),
            overlay: true,
            stats: 'errors-only',
            compress: true,
        },
        devtool: development ? 'eval-source-map' : false,
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: ['style-loader', MiniCssExtactPlugin.loader, 'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                             development ? 
                                (require('autoprefixer')(), require('postcss-preset-env'))
                                :
                                require('cssnano')(), require('autoprefixer')(), require('postcss-preset-env'),
                            ],
                        },
                    }, 'sass-loader'],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
                filename: 'index.html',
            }),
            new MiniCssExtactPlugin({
                filename: development ? 'bundle.css' : 'bundle.min.css',
            }),
            new CleanWebpackPlugin('dist', {}),
        ],    
    };
};