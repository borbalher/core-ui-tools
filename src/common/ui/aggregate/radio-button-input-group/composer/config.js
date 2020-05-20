module.exports = {
  core :
  {
    locator :
    {
      'ui/radio-button-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'radio-button-input-group' :
      {
        bindings :
        {
          'validate.radio-button-input.on.change' :
          {
            selector       : 'input[type="radio"]',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.radio.button.input',
            dispatch       : true
          }
        }
      }
    }
  }
}
