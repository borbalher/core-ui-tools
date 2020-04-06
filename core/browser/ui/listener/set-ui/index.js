/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetUIObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const viewModel = event.data.viewModel
    this.ui.setUI(viewModel)
  }
}

module.exports = SetUIObserver
