const AssociativeArray = require('.')

class AssociativeArrayFactory
{
  create()
  {
    return new AssociativeArray()
  }
}

module.exports = AssociativeArrayFactory
