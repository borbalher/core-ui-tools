/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnPrevPagesClickedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).prevPagesClicked()
  }
}

module.exports = OnPrevPagesClickedObserver
