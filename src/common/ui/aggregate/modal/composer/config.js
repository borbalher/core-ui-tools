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
        bindings :
        {
          'on.modal.action.clicked' :
          {
            selector       : '.modal-actions__action[data-action]',
            domEvent       : 'click',
            domEventMapper : 'ui/modal/mapper/modal-action',
            event          : 'dispatch.action',
            preventDefault : true
          },
          'on.modal.close.button.clicked' :
          {
            selector       : '.close-modal__button',
            domEvent       : 'click',
            domEventMapper : 'ui/modal/mapper/modal-action',
            event          : 'dispatch.action',
            preventDefault : true
          }
        },
        listeners :
        {
          'dispatch.action' :
          {
            event   : 'dispatch.action',
            locator : 'ui/modal/listener/on-dispatch-action'
          }
        }
      }
    }
  }
}
