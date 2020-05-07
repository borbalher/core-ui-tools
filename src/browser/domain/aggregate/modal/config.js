module.exports = {
  core :
  {
    ui :
    {
      'modal' :
      {
        bindings : [
          {
            selector       : '.modal-actions__cancel',
            domEvent       : 'click',
            map            : 'close.modal',
            preventDefault : true
          },
          {
            selector       : '.close-modal__button',
            domEvent       : 'click',
            map            : 'close.modal',
            preventDefault : true
          }
        ],
        listeners : [
          {
            event   : 'open.modal',
            locator : 'modal/listener/open-modal'
          },
          {
            event   : 'close.modal',
            locator : 'modal/listener/close-modal'
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
      'modal/listener/open-modal'  : `${__dirname}/listener/open-modal`,
      'modal/action/open-modal'    : `${__dirname}/action/open-modal`,
      'modal/listener/close-modal' : `${__dirname}/listener/close-modal`,
      'modal/action/close-modal'   : `${__dirname}/action/close-modal`,
      'modal'                      : __dirname
    }
  }
}
