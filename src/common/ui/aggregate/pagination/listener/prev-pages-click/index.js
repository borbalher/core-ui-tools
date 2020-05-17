/**
 * @implements {superhero/core/eventbus/observer}
 */
class PrevPagesClickObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).prevPagesClick()
  }
}

module.exports = PrevPagesClickObserver
