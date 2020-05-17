/**
 * @implements {superhero/core/eventbus/observer}
 */
class ComponentRenderedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { data : { id } } = event
    this.ui.bindComponent(id)
  }
}

module.exports = ComponentRenderedObserver
