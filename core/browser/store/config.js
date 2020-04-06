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
            'store/listener/dispatch' : true,
            'store/listener/state-fetched-successfully' : true
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
      'core/store'                        : __dirname,
      'store/middleware/logger'           : `${__dirname}/middleware/logger`,
      'store/middleware/delayer'          : `${__dirname}/middleware/delayer`,
      'store/middleware/crash-report'     : `${__dirname}/middleware/crash-report`,
      'store/listener/change-store-state' : `${__dirname}/listener/change-store-state`,
      'store/listener/dispatch'           : `${__dirname}/listener/dispatch`,
      'store/listener/fetch-state'        : `${__dirname}/listener/fetch-state`
    }
  }
}
