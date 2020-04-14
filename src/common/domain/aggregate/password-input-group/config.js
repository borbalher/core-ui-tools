module.exports = {
  core :
  {
    ui :
    {
      'password-input-group' :
      {
        bindings : [
          {
            selector : 'input[type="password"]',
            domEvent : 'change',
            map      : 'set.input.data',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ],
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'password-input-group/listener/input-data-setted'
          },
          {
            event   : 'set.input.data',
            locator : 'password-input-group/listener/set-input-data'
          }
        ]
      }
    },
    locator :
    {
      'password-input-group/listener/input-data-setted' : `${__dirname}/listener/input-data-setted`,
      'password-input-group/listener/set-input-data'    : `${__dirname}/listener/set-input-data`,
      'ui/password-input-group'                         : __dirname
    }
  }
}
