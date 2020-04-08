module.exports = {
  core :
  {
    component :
    {
      'text-input-group' :
      {
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'text-input-group/command/validate-input-data'
          },
          {
            event   : 'validate.input.data',
            locator : 'text-input-group/command/validate-input-data'
          },
          {
            event   : 'set.input.data',
            locator : 'text-input-group/command/set-input-data'
          }
        ],
        bindings : [
          {
            selector : 'input[type="text"]',
            domEvent : 'change',
            map      : 'set.input.data',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'text-input-group/command/set-input-data'      : `${__dirname}/listener/set-input-data`,
      'text-input-group/command/validate-input-data' : `${__dirname}/listener/validate-input-data`,
      'ui/text-input-group'                          : __dirname
    }
  }
}
