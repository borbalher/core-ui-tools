/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetComponentObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { data : { id } } = event
    this.ui.renderComponent(id)
  }
}

module.exports = SetComponentObserver
