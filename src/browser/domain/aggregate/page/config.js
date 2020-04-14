module.exports = {
  core :
  {
    bus :
    {
      options  : {},
      channels :
      {
        'store' : {
          listeners : {
            'state.changed' :
            {
              'page/listener/update-page' : true
            }
          }
        },
        'page' :
        {
          listeners :
          {
            'render.component' :
            {
              'page/command/render-component' : true
            },
            'ui.changed' :
            {
              'page/command/add-component-bindings'  : true,
              'page/command/add-component-listeners' : true
            },
            'component.rendered' :
            {
              'page/command/add-component-bindings' : true
              // 'page/command/add-component-listeners' : true
            }
          }
        },
        'view-model' :
        {
          listeners :
          {
            'view.model.fetched.successfully' :
            {
              'page/command/set-ui' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/ui'                              : __dirname,
      'page/command/set-ui'                  : `${__dirname}/listener/set-ui`,
      'page/command/render-component'        : `${__dirname}/listener/render-component`,
      'page/command/add-component-listeners' : `${__dirname}/listener/add-component-listeners`,
      'page/command/add-component-bindings'  : `${__dirname}/listener/add-component-bindings`
    }
  }
}
