/**
 * @implements {superhero/core/eventbus/observer}
 */
class ChangeStoreStateObserver
{
  constructor(locator)
  {
    this.locator = locator
  }

  execute(event)
  {
    const
    store = this.locator.locate('core/store'),
    state = event.data.viewModel
    store.setState(state)
  }
}

module.exports = ChangeStoreStateObserver
