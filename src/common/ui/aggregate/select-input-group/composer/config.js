module.exports = {
  core :
  {
    locator :
    {
      'ui/select-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'select-input-group' :
      {
        bindings : [
          {
            selector       : 'select',
            domEvent       : 'change',
            domEventMapper : 'ui/select-input/mapper/selected-options-to-data',
            event          : 'validate.input'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'ui/select-input-group/listener/on-validate-input'
          }
        ]
      }
    }
  }
}
