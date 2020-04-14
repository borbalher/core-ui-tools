/**
 * @implements {superhero/core/eventbus/observer}
 */
class AppInitializedListener
{
  constructor(console)
  {
    this.console = console
  }

  execute(data)
  {
    this.console.log(data)
  }
}

module.exports = AppInitializedListener
