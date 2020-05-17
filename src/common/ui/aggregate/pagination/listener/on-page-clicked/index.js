/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnPageClickedObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter }, data: { page } } = event
    this.page.getController(emitter).pageClicked(page)
  }
}

module.exports = OnPageClickedObserver
