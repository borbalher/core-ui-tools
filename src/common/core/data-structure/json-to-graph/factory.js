const JSONToGraph = require('.')

class JSONToGraphFactory
{
  constructor(composer)
  {
    this.composer = composer
  }

  create(entitySchema = 'entity/node')
  {
    return new JSONToGraph(this.composer, entitySchema)
  }
}

module.exports = JSONToGraphFactory
