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
        [
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/checkbox-input-group/mapper/input-data-mapper'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.checkbox.input',
            dispatch : true
          }
        ]
      }
    }
  }
}
