const QueueFactory = require('.')


class QueueFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {QueueFactory}
   */
  locate()
  {
    return new QueueFactory()
  }
}

module.exports = QueueFactoryLocator
