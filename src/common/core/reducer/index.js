class Reducer
{
  reduce({ action, state, ...args })
  {
    const { meta: { name } } = action

    switch(name)
    {
    default:
      return state
    }
  }
}

module.exports = Reducer
