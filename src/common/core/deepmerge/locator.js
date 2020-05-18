const DeepMerge = require('.')

class DeepMergeLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const merge = require('deepmerge')
    return new DeepMerge(merge)
  }
}

module.exports = DeepMergeLocator
