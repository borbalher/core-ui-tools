module.exports = {
  core :
  {
    'component' :
    {
      'toggeable-panel' :
      {
        bindings : [
          {
            selector : 'input[type="checkbox"]',
            domEvent : 'change',
            event    : 'toggle.panel',
            mapper   : 'checkbox-input/mapper/input-data-mapper'
          }
        ],
        listeners : [
          {
            event   : 'toggle.panel',
            locator : 'toggeable-panel/listener/toggle-panel'
          }
        ]
      }
    },
    locator :
    {
      'toggeable-panel/listener/toggle-panel' : `${__dirname}/listener/toggle-panel`,
      'toggeable-panel'                       : __dirname
    }
  }
}
