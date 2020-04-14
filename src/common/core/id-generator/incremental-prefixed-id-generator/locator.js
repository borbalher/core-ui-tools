const IncrementalTypeIdGenerator  = require('.')
/**
 * @implements {superhero/core/locator/constituent}
 */
class IncrementalTypeIdGeneratorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {IncrementalTypeIdGenerator}
   */
  locate()
  {
    return IncrementalTypeIdGenerator
  }
}

module.exports = IncrementalTypeIdGeneratorLocator
