const DeepAssign = require('.')

class DeepAssignLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {DeepAssign}
   */
  locate()
  {
    return new DeepAssign()
  }
}

module.exports = DeepAssignLocator
