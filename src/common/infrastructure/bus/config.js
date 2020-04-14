module.exports = {
  core :
  {
    bootstrap :
    {
      bus : 'infrastructure/bus/bootstrap'
    },
    locator :
    {
      'infrastructure/bus'           : __dirname,
      'infrastructure/bus/bootstrap' : `${__dirname}/bootstrap`
    }
  },
  infrastructure :
  {
    bus :
    {
      channels :
      {
        'app' :
        {
          listeners :
          {
            'app.initialized' : { 'core/listener/app-initialized': true },
            'core.error'      : { 'core/listener/error': true },
            'core.warning'    : { 'core/listener/warning': true },
            'core.info'       : { 'core/listener/info': true }
          }
        }
      }
    }
  }
}
