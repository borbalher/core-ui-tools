module.exports = {
  core :
  {
    bus :
    {
      options  : {},
      channels :
      {
        'events' : {
          listeners : {
            'app.initialized' :
            {
              'view-model/listener/fetch-view-model' : true
            }
          }
        },
        'view-model' : {
          listeners : {
            'view.model.fetched' :
            {
              'view-model/listener/view-model-fetched' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/view-model'                        : __dirname,
      'view-model/listener/fetch-view-model'   : `${__dirname}/listener/fetch-view-model`,
      'view-model/listener/view-model-fetched' : `${__dirname}/listener/view-model-fetched`
    }
  }
}
