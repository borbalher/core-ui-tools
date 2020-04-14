const MultipleAssociativeArray = require('..')

class MultipleAssociativeArrayFactory
{
  constructor(object)
  {
    this.object = object
  }

  create()
  {
    return new MultipleAssociativeArray(this.object)
  }
}

module.exports = MultipleAssociativeArrayFactory
