module.exports = {
  core :
  {
    component :
    {
      'logout' :
      {
        listeners : [
          {
            event   : 'logout',
            locator : 'logout/command/logout'
          },
          {
            event   : 'logout.successfully',
            locator : 'logout/command/redirect'
          }
        ],
        bindings : [
          {
            domEvent       : 'click',
            preventDefault : false,
            map            : 'logout'
          }
        ]
      }
    },
    locator :
    {
      'logout/command/logout'   : `${__dirname}/listener/logout`,
      'logout/command/redirect' : `${__dirname}/listener/redirect`,
      'ui/logout'               : __dirname
    }
  }
}
