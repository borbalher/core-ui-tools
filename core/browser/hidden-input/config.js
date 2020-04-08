module.exports = {
  core :
  {
    component :
    {
      'hidden-input' :
      {
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'hidden-input/command/validate-input-data'
          },
          {
            event  : 'input.data.validated',
            map    : 'set.error.message',
            emitTo : 'error'
          },
          {
            event   : 'validate.input.data',
            locator : 'hidden-input/command/validate-input-data'
          },
          {
            event   : 'set.input.data',
            locator : 'hidden-input/command/set-input-data'
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
      'hidden-input/command/set-input-data'      : `${__dirname}/listener/set-input-data`,
      'hidden-input/command/validate-input-data' : `${__dirname}/listener/validate-input-data`,
      'ui/hidden-input'                          : __dirname
    }
  }
}
