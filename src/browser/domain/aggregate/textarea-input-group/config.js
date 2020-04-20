module.exports = {
  core :
  {
    ui :
    {
      'textarea-input-group' :
      {
        listeners : [
          {
            event   : 'validate.input',
            locator : 'textarea-input-group/listener/validate-input'
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
      'textarea-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'textarea-input-group'                         : __dirname
    }
  }
}
