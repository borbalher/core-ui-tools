/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnValidateInputObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event

    this.ui.getComponent(emitter).validateInput(value)
  }
}

module.exports = OnValidateInputObserver
