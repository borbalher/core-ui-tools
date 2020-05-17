/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnNextPageClickedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).nextPageClicked()
  }
}

module.exports = OnNextPageClickedObserver
