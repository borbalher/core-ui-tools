module.exports = {
  core :
  {
    locator :
    {
      'ui/toggeable-fieldset/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'toggeable-fieldset' :
      {
        bindings :
        [
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/checkbox-input/mapper/input-data-mapper',
            event          : 'toggle.fieldset',
            dispatch       : true
          }
        ]
      }
    }
  }
}
