/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetComponentObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { data : { viewModel } } = event.data

    this.ui.setComponent(viewModel.id, viewModel)
  }
}

module.exports = SetComponentObserver
