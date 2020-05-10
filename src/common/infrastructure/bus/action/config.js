module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'emit.event' : 'infrastructure/bus/action/emit-event'
      }
    },
    locator :
    {
      'infrastructure/bus/action/emit-event' : `${__dirname}/emit-event`
    }
  }
}
