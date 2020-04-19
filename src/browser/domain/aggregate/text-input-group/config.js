module.exports = {
  core :
  {
    ui :
    {
      'text-input-group' :
      {
        listeners : [
          {
            event   : 'validate.input',
            locator : 'text-input-group/listener/validate-input'
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
      'text-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'text-input-group'                         : __dirname
    }
  }
}
