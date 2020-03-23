/**
 * @implements {superhero/core/eventbus/observer}
 */
class ResetFormObserver
{
  constructor(input)
  {
    this.input = input
  }

  execute(event)
  {
    const id = event.meta.emitter
    this.form.reset(id)
  }
}

module.exports = ResetFormObserver
