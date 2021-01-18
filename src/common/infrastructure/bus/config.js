module.exports = {
  core :
  {
    bootstrap :
    {
      bus : 'infrastructure/bus/bootstrap'
    },
    locator :
    {
      'infrastructure/bus/bootstrap' : require(`${__dirname}/bootstrap/locator`),
      'infrastructure/bus'           : require(`${__dirname}/locator`)
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
            'core.error'   : { 'core/listener/error': true },
            'core.warning' : { 'core/listener/warning': true },
            'core.info'    : { 'core/listener/info': true }
          }
        }
      }
    }
  }
}
