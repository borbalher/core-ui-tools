module.exports = {
  core :
  {
    'component' :
    {
      'form' :
      {
        bindings : [
          {
            domEvent       : 'submit',
            event          : 'form.submitted',
            mapper         : 'form/mapper/form-mapper',
            preventDefault : true
          }
        ]
      }
    },
    locator :
    {
      'core/form/composer' : __dirname
    }
  }
}
