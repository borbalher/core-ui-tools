module.exports = {
  core :
  {
    ui :
    {
      'text-input' :
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
      'text-input' : __dirname
    }
  }
}
