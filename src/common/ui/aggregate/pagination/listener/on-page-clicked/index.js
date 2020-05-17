/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnPageClickedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter }, data: { page } } = event
    this.ui.getComponent(emitter).pageClicked(page)
  }
}

module.exports = OnPageClickedObserver
