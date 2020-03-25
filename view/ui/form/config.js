module.exports = {
  core :
  {
    component :
    {
      'form' :
      {
        listeners : [
          {
            listener : 'reset.form',
            locator  : 'form/command/reset-form'
          }
        ],
        bindings : [
          {
            domEvent       : 'submit',
            map            : 'submit.form',
            mapper         : 'form/mapper/form-mapper',
            preventDefault : true
          },
          {
            domEvent       : 'reset',
            map            : 'reset.form',
            mapper         : 'form/mapper/form-mapper',
            preventDefault : false
          }
        ]
      }
    },
    locator :
    {
      'form/mapper/form-mapper' : `${__dirname}/mapper/form-mapper`,
      'form/command/reset-form' : `${__dirname}/listener/reset-form`,
      'ui/form'                 : `${__dirname}`
    }
  }
}
