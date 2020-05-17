module.exports = {
  core :
  {
    locator :
    {
      'ui/password-input-group/composer' : __dirname
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
      }
    }
  }
}
