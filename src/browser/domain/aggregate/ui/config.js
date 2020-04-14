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
              'ui/listener/view-model-changed' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/ui'                        : __dirname,
      'ui/listener/view-model-changed' : `${__dirname}/listener/view-model-changed`
    }
  }
}
