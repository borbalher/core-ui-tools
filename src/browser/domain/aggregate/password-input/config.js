module.exports = {
  core :
  {
    ui :
    {
      'password-input' :
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
      'password-input' : __dirname
    }
  }
}
