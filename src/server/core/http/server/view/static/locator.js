const StaticView = require('.')

class StaticViewLocator
{
  locate()
  {
    return new StaticView
  }
}

module.exports = StaticViewLocator
