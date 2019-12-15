module.exports = {
  core :
  {
    component :
    {
      'modal' :
      {
        observers : [
          {
            event   : 'close.modal',
            locator : 'modal/command/close-modal'
          }
        ],
        bindings : [
          {
            selector : '.close-modal__button',
            domEvent : 'click',
            map      : 'close.modal'
          },
          {
            selector : '.modal-actions__cancel.button',
            domEvent : 'click',
            map      : 'close.modal'
          }
        ]
      }
    },
    locator :
    {
      'modal/command/close-modal' : `${__dirname}/listener/close-modal`,
      'ui/modal'                  : __dirname
    }
  }
}
