module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.checkbox.input' : 'ui/checkbox-input-group/action/validate-checkbox-input'
      }
    },
    locator :
    {
      'ui/checkbox-input-group/action/validate-checkbox-input' : `${__dirname}/action/validate-input`,
      'ui/checkbox-input-group/composer'                       : `${__dirname}/composer`
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
            domEventMapper : 'ui/checkbox-input/mapper/input-data-mapper',
            event          : 'validate.checkbox.input',
            dispatch       : true
          }
        ]
      }
    }
  }
}
