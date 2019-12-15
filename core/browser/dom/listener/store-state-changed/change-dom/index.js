/**
 * @implements {superhero/core/eventbus/observer}
 */
class ChangeDOMObserver
{
  constructor(dom)
  {
    this.dom = dom
  }

  execute(event)
  {
    const state = event.data.state
    this.dom.setDOM(state)
  }
}

module.exports = ChangeDOMObserver
