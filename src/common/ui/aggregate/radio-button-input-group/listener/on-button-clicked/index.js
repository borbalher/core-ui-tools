/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnButtonClickedObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter }, data: { value } } = event

    this.page.getController(emitter).buttonClicked(value)
  }
}

module.exports = OnButtonClickedObserver
