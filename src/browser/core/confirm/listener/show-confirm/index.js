/**
 * @implements {superhero/core/eventbus/observer}
 */
class ShowConfirmObserver
{
  constructor(confirm)
  {
    this.confirm = confirm
  }

  execute(event)
  {
    this.confirm.showConfirm(event.data.message)
  }
}

module.exports = ShowConfirmObserver
