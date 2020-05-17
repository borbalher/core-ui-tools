module.exports = {
  core :
  {
    bootstrap :
    {
      'core/page' : 'core/page/bootstrap'
    },
    locator :
    {
      'core/page'                                : __dirname,
      'core/page/bootstrap'                      : `${__dirname}/bootstrap`,
      'core/page/listener/on-view-model-changed' : `${__dirname}/listener/on-view-model-changed`
    }
  },
  infrastructure :
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
              'core/page/listener/on-view-model-changed' : true
            }
          }
        }
      }
    }
  }
}
