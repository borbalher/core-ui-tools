/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnActionClickedObserver
{
  constructor(page)
  {
    this.page = page
  }

  execute(event)
  {
    const { meta: { emitter }, data: { action, index } } = event

    this.page.getController(emitter).actionClicked(action, index)
  }
}

module.exports = OnActionClickedObserver
