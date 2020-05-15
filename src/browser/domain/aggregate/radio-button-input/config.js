module.exports = {
  core :
  {
    ui :
    {
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
      'button-group-input' : __dirname
    }
  }
}
