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
          // 'on-error-middleware' :
          // {
          //   middleware :
          //   [
          //     'api/middleware/on-error'
          //   ]
          // },
          resource :
          {
            url      : '/resources/.+',
            method   : 'get',
            endpoint : 'node/core/resource',
            input    : false
          },
          'index' :
          {
            url      : '/',
            method   : 'get',
            endpoint : 'api/endpoint/page/index',
            view     : 'view/preact',
            input    : false
            // input    : 'event/requested-to-login',
            // output   : 'event/user-has-logged-in'
          },
        }
      }
    }
  }
}
