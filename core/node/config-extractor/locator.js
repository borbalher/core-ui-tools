const ConfigExtractor = require('.')

class ConfigExtractorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const fs = require('fs')

    return new ConfigExtractor(fs)
  }
}

module.exports = ConfigExtractorLocator
