/*eslint-disable*/
const
path   = require('path'),
Dotenv = require('dotenv-webpack')

module.exports = {
  entry :
  {
    'polyfills'             : '@babel/polyfill',
    'text-input-group-page' : path.resolve(__dirname, 'dist/entry/text-input-group-page/index')
  },
  output :
  {
    path     : path.resolve(__dirname, 'src/node/api/www/assets/js/bundle'),
    filename : '[name].bundle.js'
  },
  mode    : 'development',
  devtool : 'source-map',
  context : path.resolve(__dirname, 'dist'),
  resolve :
  {
    alias   :
    {
      'dist'          : path.resolve(__dirname, 'dist'),
      'src'           : path.resolve(__dirname, 'dist/src'),
      'browser'       : [
        path.resolve(__dirname, 'dist/src/browser')
      ],
      'common'        :  [
        path.resolve(__dirname, 'dist/src/common')
      ],
      'schema'        :  [
        path.resolve(__dirname, 'dist/src/common/core/schema')
      ],
      'ui'        :  [
        path.resolve(__dirname, 'dist/src/common/ui')
      ],
      'www'           : path.resolve(__dirname, 'src/node/api/www'),
      'node_modules'  : path.resolve(__dirname, 'node_modules'),
      'vm'            : 'vm-browserify',
      'fs'            : false
    }
  },
  module :
  {
    rules : [
      {
        test    : /\.js$/,
        loader  : 'babel-loader',
        options :
        {
          presets : [
            ['@babel/preset-env']
          ]
        }
      }
    ]
  },
  stats :
  {
    all          : true,
    assets       : true,
    modules      : true,
    maxModules   : 0,
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
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
  target  : 'web',
  plugins : [
    new Dotenv({
      path: './browser.env', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
  ],
  node : {
    __dirname : true
  }
}
