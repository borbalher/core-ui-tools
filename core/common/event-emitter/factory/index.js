const EventEmitter = require('..')

class EventEmitterFactory
{
  constructor(composer, consoleFactory)
  {
    this.composer       = composer
    this.consoleFactory = consoleFactory
  }

  createConsole(options)
  {
    return this.consoleFactory.create(options)
  }

  create(id, consoleOptions = {})
  {
    const console = this.createConsole(consoleOptions)

    return new EventEmitter(
      id,
      this.composer,
      console
    )
  }
}

module.exports = EventEmitterFactory
