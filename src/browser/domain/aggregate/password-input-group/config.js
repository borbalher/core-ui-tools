module.exports = {
  core :
  {
    'component' :
    {
      'password-input-group' :
      {
        bindings : [
          {
            selector : 'input[type="password"]',
            domEvent : 'change',
            event    : 'validate.input',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'password-input-group/listener/validate-input'
          }
        ]
      }
    },
    locator :
    {
      'password-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'password-input-group'                         : __dirname
    }
  }
}
