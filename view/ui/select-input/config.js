module.exports = {
  core :
  {
    component :
    {
      'select-input' :
      {
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'select-input/command/validate-input-data'
          },
          {
            event   : 'validate.input.data',
            locator : 'select-input/command/validate-input-data'
          },
          {
            event   : 'set.input.data',
            locator : 'select-input/command/set-input-data'
          }
        ],
        bindings : [
          {
            selector : '.input-group__input',
            domEvent : 'blur',
            map      : 'set.input.data',
            mapper   : 'select-input/mapper/selected-options-to-data'
          },
          {
            selector : '.input-group__input',
            domEvent : 'change',
            map      : 'set.input.data',
            mapper   : 'select-input/mapper/selected-options-to-data'
          }
        ]
      }
    },
    locator :
    {
      'select-input/mapper/selected-options-to-data' : `${__dirname}/mapper/selected-options-to-data`,
      'select-input/command/set-input-data'          : `${__dirname}/listener/set-input-data`,
      'select-input/command/validate-input-data'     : `${__dirname}/listener/validate-input-data`,
      'ui/select-input'                              : __dirname
    }
  }
}
