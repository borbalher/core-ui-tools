module.exports = {
  core :
  {
    store :
    {
      middlewares : [
        'store/middleware/logger',
        'store/middleware/delayer'
      ]
    },
    locator :
    {
      'core/store'               : __dirname,
      'store/middleware/logger'  : `${__dirname}/middleware/logger`,
      'store/middleware/delayer' : `${__dirname}/middleware/delayer`
    }
  }
}
