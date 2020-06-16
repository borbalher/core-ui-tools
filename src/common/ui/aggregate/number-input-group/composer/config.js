module.exports = {
  core :
  {
    locator :
    {
      'ui/number-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'number-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="number"]',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.number.input',
            dispatch : true
          }
        ]
      }
    }
  }
}
