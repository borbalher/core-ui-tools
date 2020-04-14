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
    const { data: { message } } = event
    this.alert.showAlert(message)
  }
}

module.exports = ShowAlertObserver
