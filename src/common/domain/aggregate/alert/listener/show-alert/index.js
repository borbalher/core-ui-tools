/**
 * @implements {superhero/core/eventbus/observer}
 */
class ShowAlertObserver
{
  constructor(alert)
  {
    this.alert = alert
  }

  execute(event)
  {
    this.alert.showAlert(event.data.message)
  }
}

module.exports = ShowAlertObserver
