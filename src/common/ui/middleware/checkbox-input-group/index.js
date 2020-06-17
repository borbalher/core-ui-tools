class CheckboxInputGroupFlowMiddleware
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
      case 'validate.checkbox.input':
      {
        const
        { value }                   = data,
        checkboxInputValidatedEvent = this.eventComposer.compose('checkbox.input.validated', { value })
        this.bus.emit(emitter, checkboxInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = CheckboxInputGroupFlowMiddleware
