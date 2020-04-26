/**
 * @implements {superhero/core/eventbus/observer}
 */
class NextPageClickObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.ui.getComponent(emitter).nextPageClick()
  }
}

module.exports = NextPageClickObserver
