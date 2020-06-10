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
      case 'validate.password.input':
      {
        const
        { value }                   = data,
        passwordInputValidatedEvent = this.eventComposer.compose('password.input.validated', { value })
        this.bus.emit(emitter, passwordInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = PasswordInputGroupFlowMiddleware
