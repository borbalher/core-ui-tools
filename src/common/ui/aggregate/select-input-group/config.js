module.exports = {
  core :
  {
    'component' :
    {
      'select-input-group' :
      {
        bindings : [
          {
            selector : 'select',
            domEvent : 'change',
            event    : 'validate.input',
            mapper   : 'select-input/mapper/selected-options-to-data'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'select-input-group/listener/validate-input'
          }
        ]
      }
    },
    locator :
    {
      'select-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'select-input-group'                         : __dirname
    }
  }
}
