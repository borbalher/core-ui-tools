module.exports = {
  core :
  {
    locator :
    {
      'ui/select-input-group/listener/on-validate-input' : `${__dirname}/listener/on-validate-input`,
      'ui/select-input-group/composer'                   : `${__dirname}/composer`,
      'ui/select-input-group/controller'                 : `${__dirname}/controller`
    }
  },
  ui :
  {
    'component' :
    {
      'select-input-group' :
      {
        bindings : [
          {
            selector       : 'select',
            domEvent       : 'change',
            domEventMapper : 'ui/select-input/mapper/selected-options-to-data',
            event          : 'validate.input'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'ui/select-input-group/listener/on-validate-input'
          }
        ]
      }
    }
  }
}
