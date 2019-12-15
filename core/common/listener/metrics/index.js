/**
 * @implements {superhero/core/eventbus/observer}
 */
class MetricsListener
{
  constructor(logConsole)
  {
    this.logConsole = logConsole
  }

  execute(data)
  {
    this.logConsole.log(data)
  }
}

module.exports = MetricsListener
