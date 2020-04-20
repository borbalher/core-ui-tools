module.exports = {
  core :
  {
    ui :
    {
      'select-input-group' :
      {
        listeners : [
          {
            event   : 'validate.input',
            locator : 'select-input-group/listener/validate-input'
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
      'select-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'select-input-group'                         : __dirname
    }
  }
}
