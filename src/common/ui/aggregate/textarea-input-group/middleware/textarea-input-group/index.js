class TextareaInputGroupFlowMiddleware
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
      case 'validate.textarea.input':
      {
        const
        { value }                 = data,
        textareaInputValidatedEvent = this.eventComposer.compose('textarea.input.validated', { value })
        this.bus.emit(emitter, textareaInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = TextareaInputGroupFlowMiddleware
