/**
 * @implements {superhero/core/eventbus/observer}
 */
class SelectButtonObserver
{
  constructor(buttonGroupInputGroup)
  {
    this.buttonGroupInputGroup = buttonGroupInputGroup
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event
    this.buttonGroupInputGroup.selectButton(emitter, value)
  }
}

module.exports = SelectButtonObserver
