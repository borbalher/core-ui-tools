/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnValidateInputObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event

    this.page.getController(emitter).validateInput(value)
  }
}

module.exports = OnValidateInputObserver
