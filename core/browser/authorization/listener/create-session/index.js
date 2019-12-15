/**
 * @implements {superhero/core/eventbus/observer}
 */
class CreateSessionObserver
{
  constructor(authorization)
  {
    this.authorization = authorization
  }

  execute()
  {
    this.authorization.createSession()
  }
}

module.exports = CreateSessionObserver
