/**
 * @implements {superhero/core/eventbus/observer}
 */
class LogoutObserver
{
  constructor(logout)
  {
    this.logout = logout
  }

  execute(event)
  {
    const id = event.meta.emitter
    this.logout.inactivateSession(id)
  }
}

module.exports = LogoutObserver
