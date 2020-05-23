module.exports = {
  core :
  {
    bootstrap :
    {
      'core/virtual-dom' : 'core/virtual-dom/bootstrap'
    },
    locator :
    {
      'core/virtual-dom'                                : __dirname,
      'core/virtual-dom/bootstrap'                      : `${__dirname}/bootstrap`,
      'core/virtual-dom/listener/on-view-model-changed' : `${__dirname}/listener/on-view-model-changed`
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
              'core/virtual-dom/listener/on-view-model-changed' : true
            }
          }
        }
      }
    }
  }
}
