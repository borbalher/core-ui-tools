module.exports = {
  core :
  {
    bus :
    {
      channels :
      {
        'confirm' :
        {
          listeners :
          {
            'show.confirm' :
            {
              'confirm/command/show-confirm' : true
            }
          }
        }
      }
    },
    locator :
    {
      'confirm/mapper/error-to-message' : `${__dirname}/mapper/error-to-message`,
      'confirm/command/show-confirm'    : `${__dirname}/listener/show-confirm`,
      'core/confirm'                    : __dirname
    }
  }
}
