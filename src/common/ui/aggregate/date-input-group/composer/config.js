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
            domEventMapper : 'ui/input/mapper/input-data-mapper'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.date.input',
            dispatch : true
          }
        ]
      }
    }
  }
}
