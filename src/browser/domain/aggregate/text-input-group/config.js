module.exports = {
  core :
  {
    ui :
    {
      'entity/text-input-group' :
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
      'entity/text-input-group'                  : __dirname
    }
  }
}
