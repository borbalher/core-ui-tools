const IncrementalIdGenerator = require('.')
/**
 * @implements {superhero/core/locator/constituent}
 */
class IncrementalIdGeneratorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {IncrementalIdGenerator}
   */
  locate()
  {
    return IncrementalIdGenerator
  }
}

module.exports = IncrementalIdGeneratorLocator
