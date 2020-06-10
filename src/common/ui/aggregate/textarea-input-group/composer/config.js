module.exports = {
  core :
  {
    locator :
    {
      'ui/textarea-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'textarea-input-group' :
      {
        bindings :
        [
          {
            selector       : 'textarea',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.textarea.input',
            dispatch : true
          }
        ]
      }
    }
  }
}
