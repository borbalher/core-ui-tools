const Metrics = require('.')

class MetricsLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const timer = this.locator.locate('core/timer')
    return new Metrics(timer)
  }
}

module.exports = MetricsLocator
