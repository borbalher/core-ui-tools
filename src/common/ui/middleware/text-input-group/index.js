class TextInputGroupFlowMiddleware
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
      case 'validate.text.input.group':
      {
        const
        { value }                 = data,
        textInputValidatedEvent = this.eventComposer.compose('text.input.group.validated', { value })
        this.bus.emit(emitter, textInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = TextInputGroupFlowMiddleware
