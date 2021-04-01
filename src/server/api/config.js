const path = require('path')

/**
 * @namespace Api
 */
module.exports = {
  core :
  {
    resource :
    {
      directory : path.resolve(__dirname, '../view')
    },
    http :
    {
      server :
      {
        URI    : process.env.SERVER_URI,
        routes :
        {
          resource :
          {
            url      : '/resources/.+',
            method   : 'get',
            endpoint : 'server/core/resource',
            input    : false
          },
          'static-file-example' :
          {
            url         : '/static',
            method      : 'get',
            endpoint    : 'api/endpoint/static',
            view        : 'core/http/server/view/static',
            contentType : 'text/html',
            file        : 'index.html',
            input       : false
          },
          'index' :
          {
            method   : 'get',
            endpoint : 'api/endpoint/page',
            view     : 'view/preact',
            document : 'base',
            input    : false
          },
        }
      }
    }
  }
}
