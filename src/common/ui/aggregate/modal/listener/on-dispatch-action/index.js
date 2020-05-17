/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnDispatchActionObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter }, data: { action } } = event
    this.page.getController(emitter).dispatchAction(action)
  }
}

module.exports = OnDispatchActionObserver
