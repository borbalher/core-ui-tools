/**
 * @implements {superhero/core/eventbus/observer}
 */
class InputDataSettedObserver
{
  constructor(passwordInputGroup)
  {
    this.passwordInputGroup = passwordInputGroup
  }

  execute(event)
  {
    const id = event.meta.emitter
    this.passwordInputGroup.validateInputData(id)
  }
}

module.exports = InputDataSettedObserver
