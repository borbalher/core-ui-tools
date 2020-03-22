module.exports = {
  core :
  {
    bus :
    {
      channels :
      {
        'view-model' :
        {
          listeners :
          {
            'view.model.changed' :
            {
              'store/listener/change-store-state' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/store'                        : __dirname,
      'store/listener/change-store-state' : `${__dirname}/listener/change-store-state`
    }
  }
}
