/**
 * @implements {superhero/core/eventbus/observer}
 */
class BlockPageObserver
{
  constructor(pageBlocker)
  {
    this.pageBlocker = pageBlocker
  }

  execute(event)
  {
    const
    id   = event.meta.emitter,
    data = {
      isBlocked : true
    }

    this.pageBlocker.changeIsBlocked(id, data)
  }
}

module.exports = BlockPageObserver
