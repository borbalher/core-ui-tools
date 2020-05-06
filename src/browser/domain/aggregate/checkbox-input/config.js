module.exports = {
  core :
  {
    ui :
    {
      'checkbox-input' :
      {
        bindings : [
          {
            domEvent : 'change',
            map      : 'input.changed',
            mapper   : 'checkbox-input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'checkbox-input/mapper/input-data-mapper' : `${__dirname}/mapper/input-data-mapper`,
      'checkbox-input'                          : __dirname
    }
  }
}
