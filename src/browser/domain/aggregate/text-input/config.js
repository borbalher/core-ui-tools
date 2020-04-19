module.exports = {
  core :
  {
    ui :
    {
      'entity/text-input' :
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
      'entity/text-input' : __dirname
    }
  }
}
