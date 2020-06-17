class PaginationFlowMiddleware
{
  constructor({ actionComposer, eventComposer, bus })
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

      const { meta: { name, emitter, schema } } = action

      switch(name)
      {
      case 'next.page.clicked':
      case 'prev.page.clicked':
      case 'next.pages.clicked':
      case 'prev.pages.clicked':
      case 'page.clicked':
        const
        { selectedPage } = store.getEntity(schema, emitter),
        pageChangedEvent = this.eventComposer.compose('page.changed', { page: selectedPage })

        this.bus.emit(emitter, pageChangedEvent)
        break
      }
    }
  }
}

module.exports = PaginationFlowMiddleware
