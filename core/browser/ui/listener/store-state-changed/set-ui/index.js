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
    const state = event.data.state
    this.ui.setUI(state)
  }
}

module.exports = SetUIObserver
