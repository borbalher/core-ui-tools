/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnTogglePanelObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event

    this.page.getController(emitter).togglePanel(value)
  }
}

module.exports = OnTogglePanelObserver
