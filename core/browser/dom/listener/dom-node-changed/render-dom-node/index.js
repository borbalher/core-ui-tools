/**
 * @implements {superhero/core/eventbus/observer}
 */
class RenderDOMNodeObserver
{
  constructor(dom)
  {
    this.dom = dom
  }

  execute(event)
  {
    const id = event.data.id
    this.dom.renderNode(id)
  }
}

module.exports = RenderDOMNodeObserver
