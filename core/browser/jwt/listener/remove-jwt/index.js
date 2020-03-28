/**
 * @implements {superhero/core/eventbus/observer}
 */
class RemoveJWTObserver
{
  constructor(jwt)
  {
    this.jwt = jwt
  }

  execute()
  {
    this.jwt.removeToken()
  }
}

module.exports = RemoveJWTObserver
