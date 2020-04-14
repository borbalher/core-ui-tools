class ConsoleListenerWarning
{
  constructor(warningConsole)
  {
    this.console = warningConsole
  }

  execute(event)
  {
    this.console.warning(event.name, event.data)
  }
}

module.exports = ConsoleListenerWarning
