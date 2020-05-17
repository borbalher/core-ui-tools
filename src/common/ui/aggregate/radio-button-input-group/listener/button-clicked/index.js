/**
 * @implements {superhero/core/eventbus/observer}
 */
class ButtonClickedObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event

    this.ui.getComponent(emitter).buttonClicked(value)
  }
}

module.exports = ButtonClickedObserver
