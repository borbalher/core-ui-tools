module.exports = {
  core :
  {
    bus :
    {
      options  : {},
      channels :
      {
        'app' : {
          listeners : {
            'app.initialized' :
            {
              'view-model/listener/fetch-view-model' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/view-model'                      : __dirname,
      'view-model/listener/fetch-view-model' : `${__dirname}/listener/fetch-view-model`
    }
  }
}
