/**
 * @implements {superhero/core/eventbus/observer}
 */
class NextPagesClickObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).nextPagesClick()
  }
}

module.exports = NextPagesClickObserver
