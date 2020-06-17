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
      case 'validate.checkbox.input.group':
      {
        const
        { value }                   = data,
        checkboxInputValidatedEvent = this.eventComposer.compose('checkbox.input.group.validated', { value })
        this.bus.emit(emitter, checkboxInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = CheckboxInputGroupFlowMiddleware
