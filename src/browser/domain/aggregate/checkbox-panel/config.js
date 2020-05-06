module.exports = {
  core :
  {
    ui :
    {
      'checkbox-panel' :
      {
        listeners : [
          {
            listenTo : 'showPanel',
            event    : 'input.changed',
            map      : 'toggle.panel'
          },
          {
            event   : 'toggle.panel',
            locator : 'checkbox-panel/listener/toggle-panel'
          }
        ]
      }
    },
    locator :
    {
      'checkbox-panel/listener/toggle-panel' : `${__dirname}/listener/toggle-panel`,
      'checkbox-panel'                       : __dirname
    }
  }
}
