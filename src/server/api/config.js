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
          'index' :
          {
            url      : '/',
            method   : 'get',
            endpoint : 'api/endpoint/page',
            view     : 'view/preact',
            document : 'base',
            page     : 'index',
            input    : false
          },
          'to-dos' :
          {
            url      : '/to-dos',
            method   : 'get',
            endpoint : 'api/endpoint/page',
            view     : 'view/preact',
            document : 'base',
            page     : 'index',
            input    : false
          },
        }
      }
    }
  }
}
