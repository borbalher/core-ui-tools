/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnViewModelChangedObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { data: { current, previous } } = event
    this.page.update(previous, current)
  }
}

module.exports = OnViewModelChangedObserver
