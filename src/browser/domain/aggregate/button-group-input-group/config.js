module.exports = {
  core :
  {
    ui :
    {
      'button-group-input-group' :
      {
        listeners : [
          {
            event   : 'select.button',
            locator : 'button-group-input-group/listener/select-button'
          },
          {
            listenTo : 'input',
            event    : 'select.button'
          }
        ]
      }
    },
    locator :
    {
      'button-group-input-group/listener/select-button' : `${__dirname}/listener/select-button`,
      'button-group-input-group'                        : __dirname
    }
  }
}
