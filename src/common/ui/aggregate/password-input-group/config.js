module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.password.input' : 'ui/password-input-group/action/validate-password-input'
      }
    },
    locator :
    {
      'ui/password-input-group/action/validate-password-input' : `${__dirname}/action/validate-input`,
      'ui/password-input-group/composer'                       : `${__dirname}/composer`,
      'ui/password-input-group/controller'                     : `${__dirname}/controller`
    }
  },
  ui :
  {
    'component' :
    {
      'password-input-group' :
      {
        bindings : [
          {
            selector       : 'input[type="password"]',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.password.input',
            dispatch       : true
          }
        ]
      }
    }
  }
}
