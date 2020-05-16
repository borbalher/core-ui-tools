const getInitialState = () =>
{
  const
  initialState  = localStorage.getItem('initial-state')
  return JSON.parse(initialState)
}

module.exports = {
  core :
  {
    store :
    {
      state : getInitialState()
    }
  }
}
