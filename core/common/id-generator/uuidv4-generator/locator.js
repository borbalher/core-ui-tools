const UUIDV4Generator = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class UUIDV4GeneratorLocator
{
  /**
   * @returns {UUIDV4Generator}
   */
  locate()
  {
    return UUIDV4Generator
  }
}

module.exports = UUIDV4GeneratorLocator
