module.exports = {
  core :
  {
    locator :
    {
      'ui/text-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'text-input-group' :
      {
        bindings :
        {
          'validate.text-input.on.change' :
          {
            selector       : 'input[type="text"]',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.text.input',
            dispatch       : true
          }
        }
      }
    }
  }
}
