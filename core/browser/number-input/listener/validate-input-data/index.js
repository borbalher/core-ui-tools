/**
 * @implements {superhero/core/eventbus/observer}
 */
class ValidateInputDataObserver
{
  constructor(input)
  {
    this.input = input
  }

  execute(event)
  {
    const id = event.meta.emitter
    this.input.validateInputData(id)
  }
}

module.exports = ValidateInputDataObserver
