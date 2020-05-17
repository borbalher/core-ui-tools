/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnPrevPageClickedObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter } } = event
    this.page.getController(emitter).prevPageClicked()
  }
}

module.exports = OnPrevPageClickedObserver
