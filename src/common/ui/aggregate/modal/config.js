module.exports = {
  core :
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
    },
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
      'ui/modal/mapper/modal-action'      : `${__dirname}/mapper/modal-action`,
      'ui/modal/listener/dispatch-action' : `${__dirname}/listener/dispatch-action`,
      'ui/modal/action/open-modal'        : `${__dirname}/action/open-modal`,
      'ui/modal/action/close-modal'       : `${__dirname}/action/close-modal`,
      'ui/modal/controller'               : `${__dirname}/controller`,
      'ui/modal/composer'                 : `${__dirname}/composer`
    }
  }
}
