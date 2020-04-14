module.exports = {
  core :
  {
    ui :
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
            locator : 'jwt/command/remove-jwt'
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
      'logout/command/logout' : `${__dirname}/listener/logout`,
      'ui/logout'             : __dirname
    }
  }
}
