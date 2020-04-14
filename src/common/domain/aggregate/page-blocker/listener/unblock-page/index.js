/**
 * @implements {superhero/core/eventbus/observer}
 */
class UnblockPageObserver
{
  constructor(pageBlocker)
  {
    this.pageBlocker = pageBlocker
  }

  execute(event)
  {
    const id = event.meta.emitter

    this.pageBlocker.changeIsBlocked(id, false)
  }
}

module.exports = UnblockPageObserver
