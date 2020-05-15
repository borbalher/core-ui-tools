module.exports = {
  core :
  {
    'component' :
    {
      'radio-button-input-group' :
      {
        bindings :
        [
          {
            selector : 'input[type="radio"]',
            domEvent : 'change',
            event    : 'button.clicked',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ],
        listeners : [
          {
            event   : 'button.clicked',
            locator : 'radio-button-input-group/listener/button-clicked'
          }
        ]
      }
    },
    locator :
    {
      'core/radio-button-input-group/composer' : __dirname
    }
  }
}
