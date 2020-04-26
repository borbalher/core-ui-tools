/**
 * @implements {superhero/core/eventbus/observer}
 */
class PrevPageClickObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).prevPageClick()
  }
}

module.exports = PrevPageClickObserver
