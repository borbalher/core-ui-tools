/**
 * @implements {superhero/core/eventbus/observer}
 */
class ValidateInputObserver
{
  constructor(textInputGroup)
  {
    this.textInputGroup = textInputGroup
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event
    this.textInputGroup.validateInput(emitter, value)
  }
}

module.exports = ValidateInputObserver
