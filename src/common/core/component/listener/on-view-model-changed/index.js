/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnViewModelChangedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { data: { current, previous } } = event
    this.component.update(previous, current)
  }
}

module.exports = OnViewModelChangedObserver
