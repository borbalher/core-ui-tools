module.exports = {
  core :
  {
    locator :
    {
      'ui/form/composer'           : `${__dirname}/composer`,
      'ui/form/mapper/form-mapper' : `${__dirname}/mapper/form-mapper`
    }
  }
  // ui :
  // {
  //   'component' :
  //   {
  //     'form' :
  //     {
  //       bindings : [
  //         {
  //           domEvent       : 'submit',
  //           event          : 'form.submitted',
  //           domEventMapper : 'ui/form/mapper/form-mapper',
  //           preventDefault : true
  //         }
  //       ]
  //     }
  //   }
  // }
}
