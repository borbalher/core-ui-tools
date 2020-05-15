const GraphDiffer = require('.')

class GraphDifferLocator
{
  locate()
  {
    return new GraphDiffer()
  }
}

module.exports = GraphDifferLocator
