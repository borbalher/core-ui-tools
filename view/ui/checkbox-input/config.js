
module.exports = {
  core :
  {
    component :
    {
      'checkbox-input' :
      {
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'checkbox-input/command/validate-input-data'
          },
          {
            event   : 'validate.input.data',
            locator : 'checkbox-input/command/validate-input-data'
          },
          {
            event   : 'set.input.data',
            locator : 'checkbox-input/command/set-input-data'
          }
        ],
        bindings : [
          {
            selector : '.checkbox__input',
            domEvent : 'change',
            map      : 'set.input.data',
            mapper   : 'checkbox-input/mapper/checked-to-data'
          }
        ]
      }
    },
    locator :
    {
      'checkbox-input/mapper/checked-to-data'      : `${__dirname}/listener/checked-to-data`,
      'checkbox-input/command/set-input-data'      : `${__dirname}/listener/set-input-data`,
      'checkbox-input/command/validate-input-data' : `${__dirname}/listener/validate-input-data`,
      'ui/checkbox-input'                          : __dirname
    }
  }
}
