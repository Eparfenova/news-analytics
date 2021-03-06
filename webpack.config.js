const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

//  const main = {
//   entry: { 
//     main: './src/index',
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].[chunkhash].js'
//   }
// }

// const about = {
//   entry: { 
//     about: './src/about/index.js',
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].[chunkhash].js'
//   }
// }

// module.exports = [ main, about ];
module.exports = {
  entry: { 
    main: './src/index.js',
    about: './src/about/index.js',
    analytics: './src/analytics/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
                        (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                        {
                            loader:'css-loader',
                            options: {
                                importLoaders: 2
                            } 
                        },
                        'postcss-loader'
                ]
    }, 
    {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
                'file-loader?name=./images/[name].[ext]', 
                {
                        loader: 'image-webpack-loader',
                        options: {}
                },
        ]
    },
    {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/fonts-frontend/[name].[ext]'
    },
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({ 
        filename: 'index.[contenthash].css',
      }),
      new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
                  preset: ['default'],
          },
          canPrint: true 
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: './src/index.html',
        filename: 'index.html',
        chunks: [ "main" ],
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: './src/about.html',
        filename: 'about.html',
        chunks: [ "about" ],
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: './src/analytics.html',
        filename: 'analytics.html',
        chunks: [ "analytics" ],
      }),
      new WebpackMd5Hash(),
  
      new webpack.DefinePlugin({
          __MODE__: JSON.stringify(process.env.NODE_ENV),
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'API_URL': JSON.stringify(isDev ? 'http://praktikum.tk' : 'https://praktikum.tk')
      })
    
    
  
  ]
};