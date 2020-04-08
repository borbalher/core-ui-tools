/**
 * @implements {superhero/core/eventbus/observer}
 */
class ValidateInputDataObserver
{
  constructor(textInputGroup)
  {
    this.textInputGroup = textInputGroup
  }

  execute(event)
  {
    const id = event.meta.emitter
    this.textInputGroup.validateInputData(id)
  }
}

module.exports = ValidateInputDataObserver
