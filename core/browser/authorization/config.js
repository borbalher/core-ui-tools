module.exports = {
  core :
  {
    bus :
    {
      options  : {},
      channels :
      {
        'authorization' :
        {
          listeners :
          {
            'create.session' :
            {
              'authorization/command/create-session' : true
            }
          }
        }
      }
    },
    authorization :
    {
      dbName    : 'BROWSER_AUTH',
      dbVersion : 1
    },
    locator :
    {
      'authorization/command/create-session' : `${__dirname}/listener/create-session`,
      'core/authorization'                   : __dirname
    }
  }
}
