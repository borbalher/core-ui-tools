module.exports = {
  core :
  {

    locator :
    {
      'core/store/listener/on-dispatch-action'    : `${__dirname}/listener/on-dispatch-action`,
      'core/store/middleware/crash-report'        : `${__dirname}/middleware/crash-report`,
      'core/store/middleware/logger'              : `${__dirname}/middleware/logger`,
      'core/store/middleware/delayer'             : `${__dirname}/middleware/delayer`,
      'core/store/middleware/thunk'               : `${__dirname}/middleware/thunk`,
      'core/store/middleware/ready-state-promise' : `${__dirname}/middleware/ready-state-promise`,
      'core/store'                                : __dirname
    }
  },
  ui :
  {
    store :
    {
      options :
      {
        stateLimit : 10
      },
      middlewares : [
        'core/store/middleware/crash-report',
        'core/store/middleware/thunk',
        'core/store/middleware/logger',
        'core/store/middleware/ready-state-promise',
        'core/store/middleware/delayer'
      ]
    }
  },
  infrastructure :
  {
    bus :
    {
      channels :
      {
        'store' :
        {
          listeners :
          {
            'dispatch.action' :
            {
              'core/store/listener/on-dispatch-action' : true
            }
          }
        }
      }
    }
  }
}
