class RadioButtonInputGroupFlowMiddleware
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
      case 'validate.radio.button.input.group':
      {
        const
        { value }                      = data,
        radioButtonInputValidatedEvent = this.eventComposer.compose('radio.button.input.group.validated', { value })
        this.bus.emit(emitter, radioButtonInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = RadioButtonInputGroupFlowMiddleware
