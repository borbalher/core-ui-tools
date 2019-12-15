/**
 * @implements {superhero/core/eventbus/observer}
 */
class SessionCreatedSuccessfullyObserver
{
  constructor(authorization)
  {
    this.authorization = authorization
  }

  execute()
  {
    this.authorization.redirectToCallback()
  }
}

module.exports = SessionCreatedSuccessfullyObserver
