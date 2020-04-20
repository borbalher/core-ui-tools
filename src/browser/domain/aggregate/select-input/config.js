module.exports = {
  core :
  {
    ui :
    {
      'select-input' :
      {
        bindings : [
          {
            domEvent : 'change',
            map      : 'input.changed',
            mapper   : 'select-input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'select-input/mapper/input-data-mapper' : `${__dirname}/mapper/input-data-mapper`,
      'select-input'                          : __dirname
    }
  }
}
