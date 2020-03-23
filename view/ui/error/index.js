const Component = require('..')
class ErrorComponent extends Component
{
  setErrorMessage(errorId, data)
  {
    const
    error                 = this.getComponent(errorId),
    { hasError, message } = data

    error.hasError = hasError
    error.message  = message

    this.emit(errorId, 'error.setted', { id: errorId, data })
    this.setComponent(errorId, error)
  }
}

module.exports = ErrorComponent
