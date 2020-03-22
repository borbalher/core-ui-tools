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
            'component.changed' :
            {
              'ui/command/render-component' : true
            },
            'component.rendered' :
            {
              'ui/command/add-component-bindings'  : true,
              'ui/command/add-component-listeners' : true
            }
          }
        },
        'store' :
        {
          listeners :
          {
            'store.state.changed' :
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
      'ui/command/set-ui'                   : `${__dirname}/listener/store-state-changed/set-ui`,
      'ui/command/render-component'         : `${__dirname}/listener/component-changed/render-component`,
      'ui/command/add-component-listeners'  : `${__dirname}/listener/component-rendered/add-component-listeners`,
      'ui/command/add-component-bindings'   : `${__dirname}/listener/component-rendered/add-component-bindings`
    }
  }
}
