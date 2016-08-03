var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('extendify')({ isDeep: true, arrays: 'concat' });
var devConfig = require('./webpack.config.dev');
var prodConfig = require('./webpack.config.prod');
var isDevelopment = process.env.ASPNETCORE_ENVIRONMENT === 'Development';
var extractCSS = new ExtractTextPlugin('main.css');

module.exports = merge({
    resolve: {
        extensions: [ '', '.js', '.jsx', '.ts', '.tsx' ]
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, include: /Spa/, loader: 'babel-loader' },
            { test: /\.ts(x?)$/, include: /Spa/, loader: 'ts-loader?silent=true' },
            { test: /\.css/, loader: extractCSS.extract(['css']) }
        ]
    },
    entry: {
        main: ['./Spa/main.tsx'],
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    plugins: [
        extractCSS,
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./wwwroot/dist/vendor-manifest.json')
        })
    ]
}, isDevelopment ? devConfig : prodConfig);
