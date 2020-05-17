/**
 * @implements {superhero/core/eventbus/observer}
 */
class PageClickObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter }, data: { page } } = event
    this.ui.getComponent(emitter).pageClick(page)
  }
}

module.exports = PageClickObserver
