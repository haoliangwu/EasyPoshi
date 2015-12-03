var path = require('path');

module.exports = {
    context: path.join(__dirname, '/public/js'),
    entry: {
        index: './src/index.js',
        editor: './src/editor.js',
        crawler: './src/crawler.js'
    },
    output: {
        libraryTarget: 'var',
        path: path.join(__dirname, '/public/js/dist'),
        filename: '[name].build.js'
    },
    externals: {
        //'react': 'React',
        'jquery': 'jQuery'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'public/css')],
                loader: 'style!css'
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};