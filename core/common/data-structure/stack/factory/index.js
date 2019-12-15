const Stack = require('..')

class StackFactory
{
  create()
  {
    return new Stack()
  }
}

module.exports = StackFactory
