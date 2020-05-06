module.exports = {
  core :
  {
    ui :
    {
      'checkbox-input-group' :
      {
        listeners : [
          {
            event   : 'validate.input',
            locator : 'checkbox-input-group/listener/validate-input'
          },
          {
            listenTo : 'input',
            event    : 'input.changed',
            map      : 'validate.input'
          }
        ]
      }
    },
    locator :
    {
      'checkbox-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'checkbox-input-group'                         : __dirname
    }
  }
}
