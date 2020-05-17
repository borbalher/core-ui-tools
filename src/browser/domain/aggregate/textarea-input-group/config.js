module.exports = {
  core :
  {
    'component' :
    {
      'textarea-input-group' :
      {
        bindings : [
          {
            selector : 'textarea',
            domEvent : 'change',
            event    : 'validate.input',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'textarea-input-group/listener/validate-input'
          }
        ]
      }
    },
    locator :
    {
      'textarea-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'textarea-input-group'                         : __dirname
    }
  }
}
