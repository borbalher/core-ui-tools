module.exports = {
  core :
  {
    locator :
    {
      'ui/form/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'form' :
      {
        bindings : [
          {
            domEvent       : 'submit',
            event          : 'form.submitted',
            domEventMapper : 'ui/form/mapper/form-mapper',
            preventDefault : true
          }
        ]
      }
    }
  }
}
