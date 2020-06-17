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
        [
          {
            selector       : 'input[type="radio"]',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.radio-button.input',
            dispatch : true
          }
        ]
      }
    }
  }
}
