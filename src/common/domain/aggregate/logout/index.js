const Component = require('../component')
class LogoutComponent extends Component
{
  constructor(dom, bus, repository)
  {
    super(dom, bus)
    this.repository = repository
  }

  logout(id)
  {
    this.repository.logout()
      .then((success) =>
      {
        this.emit(id, 'logout.successfully', { success })
      })
      .catch((error) =>
      {
        this.emit(id, 'logout.error', { error })
      })

    this.emit(id, 'logout.clicked', { id })
  }
}

module.exports = LogoutComponent
