module.exports = {
  core :
  {
    schema :
    {
      composer :
      {
        'core/event-emitter/event-meta' : `${__dirname}/schema/dto/event-meta`,
        'core/event-emitter/event'      : `${__dirname}/schema/dto/event`
      }
    },
    locator :
    {
      'core/event-emitter/factory' : `${__dirname}/factory`
    }
  }
}
