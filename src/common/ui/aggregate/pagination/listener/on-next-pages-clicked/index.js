/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnNextPagesClickedObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.page.getController(emitter).nextPagesClicked()
  }
}

module.exports = OnNextPagesClickedObserver
