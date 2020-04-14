class ConsoleListenerError
{
  constructor(errorConsole)
  {
    this.console = errorConsole
  }

  execute(event)
  {
    this.console.error(event.name, event.data)
  }
}

module.exports = ConsoleListenerError
