/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetJWTObserver
{
  constructor(jwt)
  {
    this.jwt = jwt
  }

  execute(event)
  {
    const jwt = event.data.content.jwt
    this.jwt.setToken(jwt)
  }
}

module.exports = SetJWTObserver
