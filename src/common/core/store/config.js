module.exports = {
  core :
  {
    store :
    {
      middlewares : [
        'store/middleware/crash-report',
        'store/middleware/logger',
        'store/middleware/ready-state-promise',
        'store/middleware/delayer'
      ]
    },
    locator :
    {
      'store/middleware/crash-report'        : `${__dirname}/middleware/crash-report`,
      'store/middleware/logger'              : `${__dirname}/middleware/logger`,
      'store/middleware/delayer'             : `${__dirname}/middleware/delayer`,
      'store/middleware/ready-state-promise' : `${__dirname}/middleware/ready-state-promise`,
      'core/store'                           : __dirname

    }
  }
}
