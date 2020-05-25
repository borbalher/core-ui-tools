module.exports = {
  core :
  {
    store :
    {
      middlewares : ['ui/modal/middleware/modal-flow']
    },
    reducer :
    {
      actions :
      {
        'close.modal' : 'ui/modal/action/close-modal',
        'open.modal'  : 'ui/modal/action/open-modal'
      }
    },
    locator :
    {
      'ui/modal/middleware/modal-flow' : `${__dirname}/middleware/modal-flow`,
      'ui/modal/mapper/modal-action'   : `${__dirname}/mapper/modal-action`,
      'ui/modal/action/close-modal'    : `${__dirname}/action/close-modal`,
      'ui/modal/action/open-modal'     : `${__dirname}/action/open-modal`
    }
  }
}
