/**
 * @implements {superhero/core/eventbus/observer}
 */
class ComponentRenderedObserver
{
  constructor(binder)
  {
    this.binder = binder
  }

  execute(event)
  {
    const { data : { id } } = event
    this.binder.bind(id)
  }
}

module.exports = ComponentRenderedObserver
