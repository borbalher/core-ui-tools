/**
 * @implements {superhero/core/eventbus/observer}
 */
class CloseModalValueObserver
{
  constructor(input)
  {
    this.input = input
  }

  execute(event)
  {
    const id = event.meta.emitter
    this.input.closeModal(id)
  }
}

module.exports = CloseModalValueObserver
