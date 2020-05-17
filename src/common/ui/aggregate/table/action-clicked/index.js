/**
 * @implements {superhero/core/eventbus/observer}
 */
class ActionClickedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter }, data: { action, index } } = event

    this.ui.getComponent(emitter).actionClicked(action, index)
  }
}

module.exports = ActionClickedObserver
