module.exports = {
  core :
  {
    component :
    {
      'error' :
      {
        listeners : [
          {
            event   : 'set.error.message',
            locator : 'error/command/set-error-message'
          },
          {
            event   : 'error.setted',
            locator : 'ui/command/render-component'
          }
        ]
      }
    },
    locator :
    {
      'error/command/set-error-message' : `${__dirname}/listener/set-error-message`,
      'ui/error'                        : __dirname
    }
  }
}
