const QueueFactory = require('./factory')


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
