/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnTogglePanelObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event

    this.ui.getComponent(emitter).togglePanel(value)
  }
}

module.exports = OnTogglePanelObserver
