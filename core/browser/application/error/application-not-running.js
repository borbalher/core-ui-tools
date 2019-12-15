class ApplicationNotRunningError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'APPLICATION_NOT_RUNNING'
  }
}

module.exports = ApplicationNotRunningError
