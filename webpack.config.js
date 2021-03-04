/*eslint-disable*/
const
path   = require('path'),
Dotenv = require('dotenv-webpack')

module.exports = {
  entry :
  {
    'polyfills' : path.resolve(__dirname, 'src/common/view/entrypoints/polyfills'),
    'index'     : path.resolve(__dirname, 'src/common/view/entrypoints/index'),
  },
  output :
  {
    path     : path.resolve(__dirname, 'src/server/view/resources/js'),
    filename : '[name].bundle.js'
  },
  resolve:
  {
    alias:
    {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    }
  },
  mode    : 'development',
  devtool : 'source-map',
  module :
  {
    rules : [
      {
        test   : /\.js$/,
        loader : 'babel-loader'
      },
      {
        test : /\.(scss|css)$/,
        use  : ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  stats :
  {
    all          : true,
    assets       : true,
    modules      : true,
    performance  : true,
    timings      : true,
    moduleTrace  : true,
    warnings     : true,
    errors       : true,
    errorDetails : true,
    colors       : true
  },
  optimization :
  {
    splitChunks :
    {
      cacheGroups :
      {
        commons :
        {
          name      : 'commons',
          chunks    : 'all',
          minChunks : 2
        },
        defaultVendors:
        {
          test   : /[\\/]node_modules[\\/]/,
          name   : 'vendors',
          chunks : 'all'
        }
      }
    },
  },
  target  : 'web',
  plugins : [
    new Dotenv({
      path             : './browser.env',  // load this now instead of the ones in '.env'
      safe             : true,             // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues : true,             // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars       : true,             // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent           : true,             // hide any errors
      defaults         : false             // load '.env.defaults' as the default values if empty.
    })
  ],
  node :
  {
    __dirname : true
  }
}
