module.exports = {
  core :
  {
    component :
    {
      'date-input' :
      {
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'date-input/command/validate-input-data'
          },
          {
            event   : 'validate.input.data',
            locator : 'date-input/command/validate-input-data'
          },
          {
            event   : 'set.input.data',
            locator : 'date-input/command/set-input-data'
          }
        ],
        bindings : [
          {
            selector : '.input-group__input',
            domEvent : 'blur',
            map      : 'set.input.data',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'date-input/command/set-input-data'      : `${__dirname}/listener/set-input-data`,
      'date-input/command/validate-input-data' : `${__dirname}/listener/validate-input-data`,
      'ui/date-input'                          : __dirname
    }
  }
}
