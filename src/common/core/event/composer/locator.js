const EventComposer = require('.')

class EventComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new EventComposer()
  }
}

module.exports = EventComposerLocator
