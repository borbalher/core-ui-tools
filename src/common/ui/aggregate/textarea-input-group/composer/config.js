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
        {
          'validate.textarea-input.on.change' :
          {
            selector       : 'textarea',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.textarea.input',
            dispatch       : true
          }
        }
      }
    }
  }
}
