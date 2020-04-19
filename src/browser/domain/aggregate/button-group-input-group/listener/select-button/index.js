/**
 * @implements {superhero/core/eventbus/observer}
 */
class SelectButtonObserver
{
  constructor(ui)
  {
    this.ui = ui
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event

    this.ui.getComponent(emitter).selectButton(value)
  }
}

module.exports = SelectButtonObserver
