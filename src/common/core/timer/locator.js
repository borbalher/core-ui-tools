const Timer = require('.')

class TimerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new Timer()
  }
}

module.exports = TimerLocator
