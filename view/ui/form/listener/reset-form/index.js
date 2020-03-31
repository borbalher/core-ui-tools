/**
 * @implements {superhero/core/eventbus/observer}
 */
class ResetFormObserver
{
  constructor(form)
  {
    this.form = form
  }

  execute(event)
  {
    const id = event.meta.emitter
    this.form.reset(id)
  }
}

module.exports = ResetFormObserver
