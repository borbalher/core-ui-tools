const InvalidTreeNodeError = require('./error/invalid')
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorTreeNode
{
  constructor(nodeValidator)
  {
    this.nodeValidator = nodeValidator
  }

  valid(options, data)
  {
    this.nodeValidator(options, data)

    if(!data.hasOwnProperty('parentId'))
      throw new InvalidTreeNodeError('parentId property missing')
    else if(typeof data.parentId  !== 'string' && typeof data.parentId  !== 'object')
      throw new InvalidTreeNodeError('parentId must be string/null')
    else if(typeof data.parentId  === 'string' && !data.parentId)
      throw new InvalidTreeNodeError('parentId must be not empty string')
    else if(typeof data.parentId  === 'object' && data.parentId !== null)
      throw new InvalidTreeNodeError('parentId must be string/null')
  }
}

module.exports = SchemaValidatorTreeNode
