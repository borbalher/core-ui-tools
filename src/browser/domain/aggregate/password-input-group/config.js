module.exports = {
  core :
  {
    ui :
    {
      'entity/password-input-group' :
      {
        listeners : [
          {
            event   : 'validate.input',
            locator : 'password-input-group/listener/validate-input'
          },
          {
            listenTo : 'input',
            event    : 'validate.input'
          }
        ]
      }
    },
    locator :
    {
      'password-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'entity/password-input-group'                  : __dirname
    }
  }
}
