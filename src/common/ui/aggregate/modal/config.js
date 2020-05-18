module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'open.modal'  : 'ui/modal/action/open-modal',
        'close.modal' : 'ui/modal/action/close-modal'
      }
    },
    locator :
    {
      'ui/modal/listener/on-dispatch-action' : `${__dirname}/listener/on-dispatch-action`,
      'ui/modal/mapper/modal-action'         : `${__dirname}/mapper/modal-action`,
      'ui/modal/action/open-modal'           : `${__dirname}/action/open-modal`,
      'ui/modal/action/close-modal'          : `${__dirname}/action/close-modal`,
      'ui/modal/controller'                  : `${__dirname}/controller`,
      'ui/modal/composer'                    : `${__dirname}/composer`
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
