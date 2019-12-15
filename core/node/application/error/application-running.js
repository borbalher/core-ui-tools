class ApplicationRunningError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'APPLICATION_RUNNING'
  }
}

module.exports = ApplicationRunningError
