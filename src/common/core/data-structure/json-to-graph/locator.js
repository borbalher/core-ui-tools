const JSONToGraph = require('.')

class JSONToGraphLocator
{
  locate()
  {
    return new JSONToGraph()
  }
}

module.exports = JSONToGraphLocator
