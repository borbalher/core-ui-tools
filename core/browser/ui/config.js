module.exports = {
  core :
  {
    bus :
    {
      options  : {},
      channels :
      {
        'ui' :
        {
          listeners :
          {
            'render.component' :
            {
              'ui/command/render-component' : true
            },
            'ui.changed' :
            {
              'ui/command/add-component-bindings'  : true,
              'ui/command/add-component-listeners' : true
            },
            'component.rendered' :
            {
              'ui/command/add-component-bindings'  : true
              // 'ui/command/add-component-listeners' : true
            },
          }
        },
        'view-model' :
        {
          listeners :
          {
            'view.model.fetched.successfully' :
            {
              'ui/command/set-ui' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/ui'                             : __dirname,
      'ui/command/set-ui'                   : `${__dirname}/listener/set-ui`,
      'ui/command/render-component'         : `${__dirname}/listener/render-component`,
      'ui/command/add-component-listeners'  : `${__dirname}/listener/add-component-listeners`,
      'ui/command/add-component-bindings'   : `${__dirname}/listener/add-component-bindings`
    }
  }
}
