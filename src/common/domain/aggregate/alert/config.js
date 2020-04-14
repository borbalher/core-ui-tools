module.exports = {
  core :
  {
    bus :
    {
      channels :
      {
        'alert' :
        {
          listeners :
          {
            'show.alert' :
            {
              'alert/command/show-alert' : true
            }
          }
        }
      }
    },
    locator :
    {
      'alert/mapper/error-to-message' : `${__dirname}/mapper/error-to-message`,
      'alert/command/show-alert'      : `${__dirname}/listener/show-alert`,
      'core/alert'                    : __dirname
    }
  }
}
