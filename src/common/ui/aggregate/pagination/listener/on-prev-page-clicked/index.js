/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnPrevPageClickedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).prevPageClicked()
  }
}

module.exports = OnPrevPageClickedObserver
