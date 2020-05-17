/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnNextPageClickedObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.page.getController(emitter).nextPageClicked()
  }
}

module.exports = OnNextPageClickedObserver
