/**
 * @implements {superhero/core/eventbus/observer}
 */
class RefreshPageObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const state = event.data.state
    this.page.refresh(state)
  }
}

module.exports = RefreshPageObserver
