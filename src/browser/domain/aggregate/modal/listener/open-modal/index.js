/**
 * @implements {superhero/core/eventbus/observer}
 */
class OpenModalObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).openModal()
  }
}

module.exports = OpenModalObserver
