module.exports = {
  core :
  {
    ui :
    {
      'modal' :
      {
        bindings : [
          {
            selector       : '.button.modal-actions__action',
            domEvent       : 'click',
            map            : 'dispatch.action',
            mapper         : 'modal/mapper/modal-action',
            preventDefault : true
          },
          {
            selector       : '.close-modal__button',
            domEvent       : 'click',
            map            : 'dispatch.action',
            mapper         : 'modal/mapper/modal-action',
            preventDefault : true
          }
        ],
        listeners : [
          {
            event   : 'dispatch.action',
            locator : 'modal/listener/dispatch-action'
          }
        ]
      }
    },
    reducer :
    {
      actions :
      {
        'open.modal'  : 'modal/action/open-modal',
        'close.modal' : 'modal/action/close-modal'
      }
    },
    locator :
    {
      'modal/listener/dispatch-action' : `${__dirname}/listener/close-modal`,
      'modal/action/open-modal'        : `${__dirname}/action/open-modal`,
      'modal/action/close-modal'       : `${__dirname}/action/close-modal`,
      'modal'                          : __dirname
    }
  }
}
