var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'color-conway.app.min.js',
        libraryTarget: 'var',
        library: 'colorConway'
    },
    devServer: {
        contentBase: './dist'
    }
};