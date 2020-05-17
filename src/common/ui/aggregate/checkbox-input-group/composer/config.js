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
        bindings : [
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/checkbox-input/mapper/input-data-mapper',
            event          : 'validate.input'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'ui/checkbox-input-group/listener/on-validate-input'
          }
        ]
      }
    }
  }
}
