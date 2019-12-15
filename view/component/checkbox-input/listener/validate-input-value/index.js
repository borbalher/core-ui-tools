/**
 * @implements {superhero/core/eventbus/observer}
 */
class ValidateInputValueObserver
{
  constructor(input)
  {
    this.input = input
  }

  execute(event)
  {
    const id = event.meta.emitter
    this.input.validateInput(id)
  }
}

module.exports = ValidateInputValueObserver
