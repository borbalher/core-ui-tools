class CreateGraphError extends Error
{
  constructor(...args)
  {
    super(...args)

    this.code = 'E_CREATE_GRAPH'
  }
}
module.exports = CreateGraphError
