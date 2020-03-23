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
            selector       : 'form',
            domEvent       : 'submit',
            map            : 'submit.form',
            preventDefault : true
          },
          {
            selector       : 'form',
            domEvent       : 'reset',
            map            : 'reset.form',
            preventDefault : false
          }
        ]
      }
    },
    locator :
    {
      'form/command/reset-form' : `${__dirname}/listener/reset-form`,
      'ui/form'                 : `${__dirname}`
    }
  }
}
