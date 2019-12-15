/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetInputValueObserver
{
  constructor(input)
  {
    this.input = input
  }

  execute(event)
  {
    const
    id    = event.meta.emitter,
    value = event.data.value

    this.input.setInputValue(id, value)
  }
}

module.exports = SetInputValueObserver
