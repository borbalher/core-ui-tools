module.exports = {
  core :
  {
    ui :
    {
      'entity/password-input' :
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
      'entity/password-input' : __dirname
    }
  }
}
