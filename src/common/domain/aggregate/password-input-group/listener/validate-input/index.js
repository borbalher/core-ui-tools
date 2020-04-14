/**
 * @implements {superhero/core/eventbus/observer}
 */
class ValidateInputObserver
{
  constructor(passwordInputGroup)
  {
    this.passwordInputGroup = passwordInputGroup
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event
    this.passwordInputGroup.validateInput(emitter, value)
  }
}

module.exports = ValidateInputObserver
