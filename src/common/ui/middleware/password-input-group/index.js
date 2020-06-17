class PasswordInputGroupFlowMiddleware
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
      case 'validate.password.input.group':
      {
        const
        { value }                   = data,
        passwordInputValidatedEvent = this.eventComposer.compose('password.input.group.validated', { value })
        this.bus.emit(emitter, passwordInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = PasswordInputGroupFlowMiddleware
