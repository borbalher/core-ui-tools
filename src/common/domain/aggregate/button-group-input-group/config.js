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
      },
      'button-group-input' :
      {
        bindings : [
          {
            selector : 'input[type="radio"]',
            domEvent : 'change',
            map      : 'select.button',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'button-group-input-group/listener/select-button' : `${__dirname}/listener/select-button`,
      'ui/button-group-input-group'                     : __dirname
    }
  }
}
