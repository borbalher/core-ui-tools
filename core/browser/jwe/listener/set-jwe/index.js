/**
 * @implements {superhero/core/eventbus/observer}
 */
class SetJWEObserver
{
  constructor(jwe)
  {
    this.jwe = jwe
  }

  execute(event)
  {
    this.jwe.setJWE(event.data.jwe)
  }
}

module.exports = SetJWEObserver
