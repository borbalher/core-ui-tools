module.exports = {
  core :
  {
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
      'modal/mapper/modal-action'      : `${__dirname}/mapper/modal-action`,
      'modal/listener/dispatch-action' : `${__dirname}/listener/dispatch-action`,
      'modal/action/open-modal'        : `${__dirname}/action/open-modal`,
      'modal/action/close-modal'       : `${__dirname}/action/close-modal`,
      'modal'                          : __dirname
    }
  }
}
