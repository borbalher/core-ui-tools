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
    const id = event.meta.emitter

    this.pageBlocker.changeIsBlocked(id, true)
  }
}

module.exports = BlockPageObserver
