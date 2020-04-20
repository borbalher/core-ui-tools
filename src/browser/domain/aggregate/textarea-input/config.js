module.exports = {
  core :
  {
    ui :
    {
      'textarea-input' :
      {
        bindings : [
          {
            domEvent : 'change',
            map      : 'input.changed',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'textarea-input' : __dirname
    }
  }
}
