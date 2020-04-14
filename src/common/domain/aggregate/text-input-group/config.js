module.exports = {
  core :
  {
    ui :
    {
      'text-input-group' :
      {
        listeners : [
          {
            event   : 'validate.input',
            locator : 'text-input-group/listener/validate-input'
          },
          {
            listenTo : 'input',
            event    : 'validate.input'
          }
        ]
      },
      'text-input' :
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
      'text-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'ui/text-input-group'                      : __dirname
    }
  }
}
