let path = require('path');
let root = path.resolve(__dirname);
let webpack = require('webpack');
//let ExtractTextPlugin = require("extract-text-webpack-plugin");
//let extractCSS = new ExtractTextPlugin('bundle.css');


module.exports = {
    entry: {
        app: ['./src/index.jsx']
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['jsx-loader', 'babel-loader'],
                exclude: /(node_modules|bower_components)/,
                include: root
            }, {
              test: /\.sass$/,
              loaders: ["style-loader","css-loader","sass-loader"]
            }, {
                test: /\.scss$/,
                loader: "scss-loader"
            }, {
              loader: 'url-loader',
              test: /\.(png|jpg|gif|woff|woff2?|eot|ttf|svg)$/,
              query: {
                  limit: 10000,
                  name: '[name]-[hash:7].[ext]'
              }
          }, {
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true
                }
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.sass']
    },
    devtool: 'source-map',
    devServer:{

        // `contentBase` specifies what folder to server relative to the
        // current directory. This technically isn't false since it's an absolute
        // path, but the use of `__dirname` isn't necessary.
        contentBase: path.resolve(__dirname + '/public'),
       // overlay: true
    },
    plugins: [
        //extractCSS
        new webpack.HotModuleReplacementPlugin()
    ]
};