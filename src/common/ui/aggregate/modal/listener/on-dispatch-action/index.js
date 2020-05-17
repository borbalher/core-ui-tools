/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnDispatchActionObserver
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

module.exports = OnDispatchActionObserver
