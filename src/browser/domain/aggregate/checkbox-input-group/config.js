module.exports = {
  core :
  {
    'component' :
    {
      'checkbox-input-group' :
      {
        bindings : [
          {
            selector : 'input[type="checkbox"]',
            domEvent : 'change',
            event    : 'validate.input',
            mapper   : 'checkbox-input/mapper/input-data-mapper'
          }
        ],
        listeners : [
          {
            event   : 'validate.input',
            locator : 'checkbox-input-group/listener/validate-input'
          }
        ]
      }
    },
    locator :
    {
      'checkbox-input-group/listener/validate-input' : `${__dirname}/listener/validate-input`,
      'checkbox-input-group'                         : __dirname
    }
  }
}
