/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetErrorMessageObserver
{
  constructor(error)
  {
    this.error = error
  }

  execute(event)
  {
    const
    id   = event.meta.emitter,
    data = event.data

    this.error.setErrorMessage(id, data)
  }
}

module.exports = SetErrorMessageObserver
