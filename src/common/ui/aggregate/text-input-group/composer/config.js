module.exports = {
  core :
  {
    locator :
    {
      'ui/text-input-group/composer' : __dirname
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
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.text.input',
            dispatch       : true
          }
        ]
      }
    }
  }
}
