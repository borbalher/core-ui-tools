module.exports = {
  core :
  {
    ui :
    {
      'text-input-group' :
      {
        bindings : [
          {
            selector : 'input[type="text"]',
            domEvent : 'change',
            map      : 'set.input.data',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ],
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'text-input-group/listener/input-data-setted'
          },
          {
            event   : 'set.input.data',
            locator : 'text-input-group/listener/set-input-data'
          }
        ]
      }
    },
    locator :
    {
      'text-input-group/listener/input-data-setted' : `${__dirname}/listener/input-data-setted`,
      'text-input-group/listener/set-input-data'    : `${__dirname}/listener/set-input-data`,
      'ui/text-input-group'                         : __dirname
    }
  }
}
