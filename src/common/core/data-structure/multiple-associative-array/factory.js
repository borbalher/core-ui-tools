const MultipleAssociativeArray = require('.')

class MultipleAssociativeArrayFactory
{
  constructor(object)
  {
    this.object = object
  }

  create(iterable)
  {
    return new MultipleAssociativeArray(iterable, this.object)
  }
}

module.exports = MultipleAssociativeArrayFactory
