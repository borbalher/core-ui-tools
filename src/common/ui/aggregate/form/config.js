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
            domEventMapper : 'form/mapper/form-mapper',
            preventDefault : true
          }
        ]
      }
    },
    locator :
    {
      'ui/form/composer'        : `${__dirname}/composer`,
      'form/mapper/form-mapper' : `${__dirname}/mapper/form-mapper`
    }
  }
}
