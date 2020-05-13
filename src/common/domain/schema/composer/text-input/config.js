module.exports = {
  core :
  {
    'component' :
    {
      'text-input' :
      {
        bindings : [
          {
            domEvent : 'change',
            event    : 'input.changed',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'core/text-input/composer' : __dirname
    }
  }
}
