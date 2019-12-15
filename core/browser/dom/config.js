module.exports = {
  core :
  {
    bus :
    {
      options  : {},
      channels :
      {
        'dom' : {
          listeners : {
            'dom.node.changed' :
            {
              'dom/command/render-dom-node'       : true,
              'dom/command/add-dom-node-bindings' : true
            },
            'dom.changed' :
            {
              'dom/command/add-dom-node-observers' : true,
              'dom/command/add-dom-node-bindings'  : true
            }
          }
        },
        'store' :
        {
          listeners :
          {
            'store.state.changed' :
            {
              'dom/command/change-dom' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/dom'                           : __dirname,
      'dom/command/render-dom-node'        : `${__dirname}/listener/dom-node-changed/render-dom-node`,
      'dom/command/change-dom'             : `${__dirname}/listener/store-state-changed/change-dom`,
      'dom/command/add-dom-node-observers' : `${__dirname}/listener/dom-node-changed/add-dom-node-observers`,
      'dom/command/add-dom-node-bindings'  : `${__dirname}/listener/dom-node-changed/add-dom-node-bindings`
    }
  }
}
