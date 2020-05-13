module.exports = {
  core :
  {
    'component' :
    {
      'select-input' :
      {
        bindings : [
          {
            domEvent : 'change',
            event    : 'input.changed',
            mapper   : 'select-input/mapper/selected-options-to-data'
          }
        ]
      }
    },
    locator :
    {
      'core/select-input/composer' : __dirname
    }
  }
}
