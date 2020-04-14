module.exports = {
  core :
  {
    bootstrap :
    {
      'core/ui' : 'core/ui/bootstrap'
    },
    locator :
    {
      'core/ui'                        : __dirname,
      'core/ui/bootstrap'              : `${__dirname}/bootstrap`,
      'ui/listener/component-changed'  : `${__dirname}/listener/component-changed`,
      'ui/listener/component-rendered' : `${__dirname}/listener/component-rendered`,
      'ui/listener/view-model-changed' : `${__dirname}/listener/view-model-changed`,
      'ui/listener/component-binded'   : `${__dirname}/listener/component-binded`
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
              'ui/listener/view-model-changed' : true
            }
          }
        },
        'ui' :
        {
          listeners :
          {
            // 'component.changed' :
            // {
            //   'ui/listener/component-changed' : true
            // },
            // 'component.rendered' :
            // {
            //   'ui/listener/component-rendered' : true
            // }
          }
        }
      }
    }
  }
}
