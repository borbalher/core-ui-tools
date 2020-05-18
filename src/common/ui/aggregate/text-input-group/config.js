module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.text.input' : 'ui/text-input-group/action/validate-text-input'
      }
    },
    locator :
    {
      'ui/text-input-group/action/validate-text-input' : `${__dirname}/action/validate-input`,
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
            event          : 'validate.text.input',
            dispatch       : true
          }
        ]
      }
    }
  }
}
