module.exports = {
  core :
  {
    ui :
    {
      'toggable-fieldset' :
      {
        listeners : [
          {
            listenTo : 'showPanel',
            event    : 'input.validated',
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
