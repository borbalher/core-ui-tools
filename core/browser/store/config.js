module.exports = {
  core :
  {
    bus :
    {
      channels :
      {
        'app' :
        {
          listeners :
          {
            'app.initialized' :
            {
              'store/listener/fetch-state' : true
            }
          }
        },
        'store' :
        {
          listeners :
          {
            'dispatch' :
            {
              'store/listener/dispatch' : true
            }
          }
        }
      }
    },
    store :
    {
      middlewares : [
        'store/middleware/logger'
      ]
    },
    locator :
    {
      'core/store'                 : __dirname,
      'store/middleware/logger'    : `${__dirname}/middleware/logger`,
      'store/listener/dispatch'    : `${__dirname}/listener/dispatch`,
      'store/listener/fetch-state' : `${__dirname}/listener/fetch-state`
    }
  }
}
