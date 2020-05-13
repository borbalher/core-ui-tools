module.exports = {
  core :
  {
    'component' :
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
      'core/checkbox-input/composer' : __dirname
    }
  }
}
