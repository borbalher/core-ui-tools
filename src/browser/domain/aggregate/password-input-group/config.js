module.exports = {
  core :
  {
    ui :
    {
      'password-input-group' :
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
      'password-input-group'                         : __dirname
    }
  }
}
