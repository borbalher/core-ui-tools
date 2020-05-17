module.exports = {
  core :
  {
    locator :
    {
      'ui/password-input-group/listener/on-validate-input' : `${__dirname}/listener/on-validate-input`,
      'ui/password-input-group/composer'                   : `${__dirname}/composer`,
      'ui/password-input-group/controller'                 : `${__dirname}/controller`
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
              event          : 'validate.input'
            }
          ],
          listeners : [
            {
              event   : 'validate.input',
              locator : 'ui/password-input-group/listener/on-validate-input'
            }
          ]
        }
      },
      locator :
      {
        'ui/password-input-group/listener/on-validate-input' : `${__dirname}/listener/on-validate-input`,
        'ui/password-input-group/composer'                   : `${__dirname}/composer`,
        'ui/password-input-group/controller'                 : `${__dirname}/controller`
      }
    }
  }
}
