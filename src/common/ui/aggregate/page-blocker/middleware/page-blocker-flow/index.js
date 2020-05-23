class PageBlockerFlow
{
  constructor(bus, eventComposer)
  {
    this.bus = bus
    this.eventComposer = eventComposer
  }

  middleware()
  {
    return  store => next => action =>
    {
      next(action)

      const { meta: { name } } = action

      switch(name)
      {
      case 'block.page':
      case 'unblock.page':
        const
        { ui: { isBlocked } } = store.getState(),
        toggleBlockerEvent    = this.eventComposer.compose('toggle.blocker', { isBlocked })

        this.bus.emit(toggleBlockerEvent)
        break
      }
    }
  }
}

module.exports = PageBlockerFlow
