module.exports = {
  core :
  {
    'component' :
    {
      'password-input' :
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
      'core/password-input/composer' : __dirname
    }
  }
}
