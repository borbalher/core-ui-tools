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
      'radio-button-input-group/listener/button-clicked' : `${__dirname}/listener/button-clicked`,
      'radio-button-input-group'                         : __dirname
    }
  }
}
