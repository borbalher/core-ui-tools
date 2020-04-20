/**
 * @implements {superhero/core/eventbus/observer}
 */
class ValidateInputObserver
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

module.exports = ValidateInputObserver
