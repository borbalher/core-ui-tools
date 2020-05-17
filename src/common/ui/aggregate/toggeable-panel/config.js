module.exports = {
  core :
  {
    locator :
    {
      'ui/toggeable-panel/listener/on-toggle-panel' : `${__dirname}/listener/on-toggle-panel`,
      'ui/toggeable-panel/composer'                 : `${__dirname}/composer`,
      'ui/toggeable-panel/controller'               : `${__dirname}/controller`
    }
  },
  ui :
  {
    'component' :
    {
      'toggeable-panel' :
      {
        bindings : [
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/checkbox-input/mapper/input-data-mapper',
            event          : 'toggle.panel'
          }
        ],
        listeners : [
          {
            event   : 'toggle.panel',
            locator : 'ui/toggeable-panel/listener/on-toggle-panel'
          }
        ]
      }
    }
  }
}
