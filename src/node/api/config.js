/**
 * @namespace Api
 */
module.exports = {
  core :
  {
    resource :
    {
      directory : `${__dirname}/www`
    },
    http :
    {
      server :
      {
        url    : process.env.SERVER_URL,
        routes :
        {
          resource :
          {
            url      : '/assets/.+',
            method   : 'get',
            endpoint : 'node/core/resource',
            input    : false
          },
          'base-middleware' :
          {
            middleware :
            [
              'node/api/middleware/lang-extractor'
            ]
          },
          'text-input-group' :
          {
            url      : '/text-input-group',
            method   : 'get',
            endpoint : 'node/api/endpoint/page/text-input-group',
            view     : 'view/handlebars',
            template : 'text-input-group-page',
            input    : false
          }
        }
      }
    }
  }
}
