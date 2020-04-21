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
            mapper   : 'select-input/mapper/selected-options-to-data'
          }
        ]
      }
    },
    locator :
    {
      'select-input/mapper/selected-options-to-data' : `${__dirname}/mapper/selected-options-to-data`,
      'select-input'                                 : __dirname
    }
  }
}
