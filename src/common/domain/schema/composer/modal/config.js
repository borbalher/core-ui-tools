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
    locator :
    {
      'core/modal/composer' : __dirname
    }
  }
}
