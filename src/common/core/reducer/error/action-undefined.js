class ActionUndefinedError extends ReferenceError
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_ACTION_UNDEFINED'
  }
}

module.exports = ActionUndefinedError
