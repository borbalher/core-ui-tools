const Queue = require('.')

class QueueFactory
{
  create()
  {
    return new Queue()
  }
}

module.exports = QueueFactory
