/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnViewModelChangedObserver
{
  constructor(virtualDOM)
  {
    this.virtualDOM = virtualDOM
  }

  execute(event)
  {
    const { data: { current, previous } } = event
    this.virtualDOM.update(previous, current)
  }
}

module.exports = OnViewModelChangedObserver
