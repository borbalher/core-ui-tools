/**
 * @implements {superhero/core/eventbus/observer}
 */
class ComponentBindedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { data : { id } } = event
    this.ui.listenComponent(id)
  }
}

module.exports = ComponentBindedObserver
