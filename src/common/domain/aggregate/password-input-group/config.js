module.exports = {
  core :
  {
    ui :
    {
      'password-input-group' :
      {
        listeners : [
          {
            event   : 'validate.input',
            locator : 'password-input-group/listener/validate-input'
          },
          {
            listenTo : 'input',
            event    : 'validate.input'
          }
        ]
      },
      'password-input' :
      {
        bindings : [
          {
            domEvent : 'change',
            map      : 'validate.input',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'password-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'ui/password-input-group'                      : __dirname
    }
  }
}
