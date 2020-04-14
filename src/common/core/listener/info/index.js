class ConsoleListenerInfo
{
  constructor(infoConsole)
  {
    this.console = infoConsole
  }

  execute(event)
  {
    this.console.info(event.name, event.data)
  }
}

module.exports = ConsoleListenerInfo
