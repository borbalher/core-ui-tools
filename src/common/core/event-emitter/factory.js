const EventEmitter = require('.')

class EventEmitterFactory
{
  constructor(consoleFactory)
  {
    this.consoleFactory = consoleFactory
  }

  createConsole(options)
  {
    return this.consoleFactory.create(options)
  }

  create(id, consoleOptions = {})
  {
    const console = this.createConsole(consoleOptions)
    return new EventEmitter(id, console)
  }
}

module.exports = EventEmitterFactory
