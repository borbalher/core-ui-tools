module.exports = {
  core :
  {
    locator :
    {
      'ui/radio-fieldset/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'radio-fieldset' :
      {
        bindings :
        [
          {
            selector       : '.radio-fieldset-toggle',
            domEvent       : 'change',
            domEventMapper : 'ui/checkbox-input-group/mapper/input-data-mapper',
            event          : 'toggle.fieldset',
            dispatch       : true
          }
        ]
      }
    }
  }
}
