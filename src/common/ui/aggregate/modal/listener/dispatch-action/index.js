/**
 * @implements {superhero/core/eventbus/observer}
 */
class DispatchActionObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter }, data: { action } } = event
    this.ui.getComponent(emitter).dispatchAction(action)
  }
}

module.exports = DispatchActionObserver
