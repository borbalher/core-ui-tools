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
        bindings : [
          {
            selector       : 'input[type="text"]',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.input'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'ui/text-input-group/listener/on-validate-input'
          }
        ]
      }
    }
  }
}
