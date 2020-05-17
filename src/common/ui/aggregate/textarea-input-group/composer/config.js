module.exports = {
  core :
  {
    locator :
    {
      'ui/textarea-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'textarea-input-group' :
      {
        bindings : [
          {
            selector       : 'textarea',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.input'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'ui/textarea-input-group/listener/on-validate-input'
          }
        ]
      }
    }
  }
}
