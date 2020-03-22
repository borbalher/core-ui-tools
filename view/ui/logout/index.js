const Component = require('..')
class LogoutComponent extends Component
{
  constructor(dom, bus, sessionInactivator)
  {
    super(dom, bus)
    this.sessionInactivator = sessionInactivator
  }

  inactivateSession(logoutButtonId)
  {
    this.sessionInactivator.inactivateSession()
      .then((success) =>
      {
        this.emit(logoutButtonId, 'session.closed.successfully', {
          success
        })
      })
      .catch((error) =>
      {
        this.emit(logoutButtonId, 'session.closed.error', { error })
      })
  }
}

module.exports = LogoutComponent
