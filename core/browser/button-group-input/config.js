module.exports = {
  core :
  {
    component :
    {
      'button-group-input' :
      {
        listeners : [
          {
            event   : 'input.data.setted.data',
            locator : 'button-group-input/command/validate-input-data'
          },
          {
            event   : 'validate.input.data',
            locator : 'button-group-input/command/validate-input-data'
          },
          {
            event   : 'set.input.data',
            locator : 'button-group-input/command/set-input-data'
          }
        ],
        bindings : [
          {
            selector : '.btn-group__button-container input[type="radio"]',
            domEvent : 'change',
            map      : 'set.input.data',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'button-group-input/command/set-input-data'      : `${__dirname}/listener/set-input-data`,
      'button-group-input/command/validate-input-data' : `${__dirname}/listener/validate-input-data`,
      'ui/button-group-input'                          : __dirname
    }
  }
}
