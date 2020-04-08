/**
 * @implements {superhero/core/eventbus/observer}
 */
class ComponentRenderednObserver
{
  constructor(listener)
  {
    this.listener = listener
  }

  execute(event)
  {
    const { data : { id } } = event
    this.listener.listen(id)
  }
}

module.exports = ComponentRenderednObserver
