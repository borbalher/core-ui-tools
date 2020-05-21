const JSONToTree = require('.')

class JSONToTreeFactory
{
  constructor(composer)
  {
    this.composer = composer
  }

  create(entitySchema = 'tree-node')
  {
    return new JSONToTree(this.composer, entitySchema)
  }
}

module.exports = JSONToTreeFactory
