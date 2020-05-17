/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnValidateInputObserver
{
  constructor(passwordInputGroup)
  {
    this.passwordInputGroup = passwordInputGroup
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event
    this.ui.getComponent(emitter).validateInput(value)
  }
}

module.exports = OnValidateInputObserver
