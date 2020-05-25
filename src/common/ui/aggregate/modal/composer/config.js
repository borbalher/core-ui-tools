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
        [
          {
            selector       : '[data-action]',
            domEvent       : 'click',
            domEventMapper : 'ui/modal/mapper/modal-action',
            event          : 'dispatch.action',
            dispatch       : true,
            preventDefault : true
          }
        ]
      }
    }
  }
}
