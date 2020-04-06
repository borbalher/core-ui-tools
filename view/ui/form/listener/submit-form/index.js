/**
 * @implements {superhero/core/eventbus/observer}
 */
class SubmitFormObserver
{
  constructor(form)
  {
    this.form = form
  }

  execute(event)
  {
    const id = event.meta.emitter
    this.form.submit(id)
  }
}

module.exports = SubmitFormObserver
