module.exports = {
  core :
  {
    bus :
    {
      channels :
      {
        'authorization' :
        {
          listeners :
          {
            'session.created.successfully' :
            {
              'jwe/command/set-jwe' : true
            }
          }
        }
      }
    },
    locator :
    {
      'jwe/command/set-jwe' : `${__dirname}/listener/set-jwe`,
      'core/jwe'            : __dirname
    }
  }
}
