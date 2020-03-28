module.exports = {
  core :
  {
    bus :
    {
      channels :
      {
        'jwe' :
        {
          listeners :
          {
            'jwe.setted' :
            {
              'jwt/command/set-jwt' : true
            }
          }
        },
        'jwt' :
        {
          listeners :
          {
            'jwt.setted' :
            {
              'jwt/command/redirect' : true
            },
            'jwt.removed' :
            {
              'jwt/command/redirect' : true
            }
          }
        }
      }
    },
    jwt :
    {
      tokenDuration : 31 * 24 * 60 * 60 * 1000 // 31 days to milliseconds
    },
    locator :
    {
      'jwt/command/remove-jwt' : `${__dirname}/listener/remove-jwt`,
      'jwt/command/set-jwt'    : `${__dirname}/listener/set-jwt`,
      'jwt/command/redirect'   : `${__dirname}/listener/redirect`,
      'core/jwt'               : __dirname
    }
  }
}
