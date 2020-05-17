module.exports = {
  core :
  {
    locator :
    {
      'ui/textarea-input-group/listener/on-validate-input' : `${__dirname}/listener/on-validate-input`,
      'ui/textarea-input-group/composer'                   : `${__dirname}/composer`,
      'ui/textarea-input-group/controller'                 : `${__dirname}/controller`
    }
  },
  ui :
  {
    'component' :
    {
      'textarea-input-group' :
      {
        bindings : [
          {
            selector       : 'textarea',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.input'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'ui/textarea-input-group/listener/on-validate-input'
          }
        ]
      }
    }
  }
}
