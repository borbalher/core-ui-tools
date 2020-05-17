module.exports = {
  core :
  {
    locator :
    {
      'ui/text-input-group/listener/on-validate-input' : `${__dirname}/listener/on-validate-input`,
      'ui/text-input-group/composer'                   : `${__dirname}/composer`,
      'ui/text-input-group/controller'                 : `${__dirname}/controller`
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
