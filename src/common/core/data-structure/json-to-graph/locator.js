const JSONSToGraph = require('.')

class JSONSToGraphLocator
{
  locate()
  {
    return new JSONSToGraph()
  }
}

module.exports = JSONSToGraphLocator
