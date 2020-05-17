/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnPrevPagesClickedObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.page.getController(emitter).prevPagesClicked()
  }
}

module.exports = OnPrevPagesClickedObserver
