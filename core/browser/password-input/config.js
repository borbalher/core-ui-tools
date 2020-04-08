module.exports = {
  core :
  {
    component :
    {
      'password-input' :
      {
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'password-input/command/validate-input-data'
          },
          {
            event   : 'validate.input.data',
            locator : 'password-input/command/validate-input-data'
          },
          {
            event  : 'input.data.validated',
            map    : 'set.error.message',
            emitTo : 'error'
          },
          {
            event   : 'set.input.data',
            locator : 'password-input/command/set-input-data'
          }
        ],
        bindings : [
          {
            selector : '.input-group__input',
            domEvent : 'change',
            map      : 'set.input.data',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'password-input/command/set-input-data'      : `${__dirname}/listener/set-input-data`,
      'password-input/command/validate-input-data' : `${__dirname}/listener/validate-input-data`,
      'ui/password-input'                          : __dirname
    }
  }
}
