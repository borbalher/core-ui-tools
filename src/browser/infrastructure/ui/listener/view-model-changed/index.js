/**
 * @implements {superhero/core/eventbus/observer}
 */
class ViewModelChangedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { data: { viewModel } } = event
    this.ui.update(viewModel)
  }
}

module.exports = ViewModelChangedObserver
