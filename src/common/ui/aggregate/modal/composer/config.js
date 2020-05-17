module.exports = {
  core :
  {
    locator :
    {
      'ui/modal/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'modal' :
      {
        bindings : [
          {
            selector       : '.modal-actions__action[data-action]',
            domEvent       : 'click',
            domEventMapper : 'ui/modal/mapper/modal-action',
            event          : 'dispatch.action',
            preventDefault : true
          },
          {
            selector       : '.close-modal__button',
            domEvent       : 'click',
            domEventMapper : 'ui/modal/mapper/modal-action',
            event          : 'dispatch.action',
            preventDefault : true
          }
        ],
        listeners : [
          {
            event   : 'dispatch.action',
            locator : 'ui/modal/listener/dispatch-action'
          }
        ]
      }
    }
  }
}
