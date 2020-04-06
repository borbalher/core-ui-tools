module.exports = {
  core :
  {
    component :
    {
      'form' :
      {
        listeners : [
          {
            event    : 'reset.form',
            locator  : 'form/command/reset-form'
          },
          {
            event    : 'submit.form',
            locator  : 'form/command/submit-form'
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
      'form/mapper/form-mapper'  : `${__dirname}/mapper/form-mapper`,
      'form/command/reset-form'  : `${__dirname}/listener/reset-form`,
      'form/command/submit-form' : `${__dirname}/listener/submit-form`,
      'ui/form'                  : `${__dirname}`
    }
  }
}
