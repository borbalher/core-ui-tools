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
            'set.jwe' :
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
