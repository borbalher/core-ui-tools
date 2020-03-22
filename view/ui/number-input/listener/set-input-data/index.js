/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetInputDataObserver
{
  constructor(input)
  {
    this.input = input
  }

  execute(event)
  {
    const
    id    = event.meta.emitter,
    data  = event.data.data

    this.input.setInputData(id, data)
  }
}

module.exports = SetInputDataObserver
