const AssociativeArray = require('.')

class AssociativeArrayFactory
{
  create(iterable)
  {
    return new AssociativeArray(iterable)
  }
}

module.exports = AssociativeArrayFactory
