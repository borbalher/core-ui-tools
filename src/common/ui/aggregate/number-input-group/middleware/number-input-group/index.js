class NumberInputGroupFlowMiddleware
{
  constructor({
    actionComposer,
    eventComposer,
    bus
  })
  {
    this.actionComposer = actionComposer
    this.eventComposer  = eventComposer
    this.bus            = bus
  }


  middleware()
  {
    return  store => next => action =>
    {
      next(action)

      const { meta: { emitter, name }, data } = action

      switch(name)
      {
      case 'validate.number.input':
      {
        const
        { value }                 = data,
        numberInputValidatedEvent = this.eventComposer.compose('number.input.validated', { value })
        this.bus.emit(emitter, numberInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = NumberInputGroupFlowMiddleware
