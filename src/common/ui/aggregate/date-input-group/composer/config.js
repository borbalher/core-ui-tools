module.exports = {
  core :
  {
    locator :
    {
      'ui/date-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'date-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="text"]',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.date.input',
            dispatch       : true
          }
        ]
      }
    }
  }
}
