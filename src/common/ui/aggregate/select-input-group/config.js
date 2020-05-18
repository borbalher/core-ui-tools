module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.select.input' : 'ui/select-input-group/action/validate-select-input'
      }
    },
    locator :
    {
      'ui/select-input-group/action/validate-select-input' : `${__dirname}/action/validate-input`,
      'ui/select-input-group/composer'                     : `${__dirname}/composer`,
      'ui/select-input-group/controller'                   : `${__dirname}/controller`
    }
  },
  ui :
  {
    'component' :
    {
      'select-input-group' :
      {
        bindings :
        {
          'validate.text-input.on.change' :
          {
            selector       : 'select',
            domEvent       : 'change',
            domEventMapper : 'ui/select-input/mapper/selected-options-to-data',
            event          : 'validate.select.input',
            dispatch       : true
          }
        }
      }
    }
  }
}
