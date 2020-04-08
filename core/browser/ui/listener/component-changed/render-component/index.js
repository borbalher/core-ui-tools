/**
 * @implements {superhero/core/eventbus/observer}
 */
class RenderComponentObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const id  = event.data.id

    this.ui.renderComponent(id)
  }
}

module.exports = RenderComponentObserver
