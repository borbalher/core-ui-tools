module.exports = {
  core :
  {
    'component' :
    {
      'text-input-group' :
      {
        bindings : [
          {
            selector : 'input[type="text"]',
            domEvent : 'change',
            event    : 'validate.input',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'text-input-group/listener/validate-input'
          }
        ]
      }
    },
    locator :
    {
      'text-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'text-input-group'                         : __dirname
    }
  }
}
