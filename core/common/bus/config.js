module.exports = {
  core :
  {
    bootstrap :
    {
      bus : 'core/bus/bootstrap'
    },
    bus :
    {
      channels : {
        'events' :
        {
          listeners : {
            'app.initialized' : { 'core/listener/metrics': true },
            'core.error'      : { 'core/listener/error': true },
            'core.warning'    : { 'core/listener/warning': true },
            'core.info'       : { 'core/listener/info': true }
          }
        }
      }
    },
    locator :
    {
      'core/bus' : __dirname,
      'core/bus/bootstrap' : `${__dirname}/bootstrap`
    }
  }
}
