/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetInputDataObserver
{
  constructor(textInputGroup)
  {
    this.textInputGroup = textInputGroup
  }

  execute(event)
  {
    const
    id   = event.meta.emitter,
    data = event.data.data

    this.textInputGroup.setInputData(id, data)
  }
}

module.exports = SetInputDataObserver
