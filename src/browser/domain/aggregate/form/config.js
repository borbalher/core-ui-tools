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
      'form/mapper/form-mapper' : `${__dirname}/mapper/form-mapper`
    }
  }
}
