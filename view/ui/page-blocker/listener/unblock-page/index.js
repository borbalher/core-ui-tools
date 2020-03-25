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
    const
    id   = event.meta.emitter,
    data = {
      isBlocked : false
    }

    this.pageBlocker.changeIsBlocked(id, data)
  }
}

module.exports = UnblockPageObserver
