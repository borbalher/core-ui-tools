/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnNextPagesClickedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).nextPagesClicked()
  }
}

module.exports = OnNextPagesClickedObserver
