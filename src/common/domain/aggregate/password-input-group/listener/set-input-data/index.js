/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetInputDataObserver
{
  constructor(passwordInputGroup)
  {
    this.passwordInputGroup = passwordInputGroup
  }

  execute(event)
  {
    const
    id   = event.meta.emitter,
    data = event.data.data

    this.passwordInputGroup.setInputData(id, data)
  }
}

module.exports = SetInputDataObserver
