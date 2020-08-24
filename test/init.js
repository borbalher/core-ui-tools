const
path   = require('path'),
dotenv = require('dotenv')

dotenv.config()

require.main.filename = path.resolve(__dirname, '../src/index.js')
require.main.dirname  = path.resolve(__dirname, '../src')
