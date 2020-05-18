module.exports = {
  core :
  {
    locator :
    {
      'ui/checkbox-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'checkbox-input-group' :
      {
        bindings :
        {
          'validate.checkbox-input.on.change' :
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/checkbox-input/mapper/input-data-mapper',
            event          : 'validate.checkbox.input',
            dispatch       : true
          }
        }
      }
    }
  }
}
