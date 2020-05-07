/**
 * @implements {superhero/core/eventbus/observer}
 */
class CloseModalObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).closeModal()
  }
}

module.exports = CloseModalObserver
