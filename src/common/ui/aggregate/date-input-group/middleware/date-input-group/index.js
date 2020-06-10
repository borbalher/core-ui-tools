class DateInputGroupFlowMiddleware
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
      case 'validate.date.input':
      {
        const
        { value }               = data,
        dateInputValidatedEvent = this.eventComposer.compose('date.input.validated', { value })
        this.bus.emit(emitter, dateInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = DateInputGroupFlowMiddleware
