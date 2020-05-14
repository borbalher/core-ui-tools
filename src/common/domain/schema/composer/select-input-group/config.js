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
      'core/select-input-group/composer' : __dirname
    }
  }
}
