const
getInitialViewModel = () =>
{
  const
  initialViewModel  = localStorage.getItem('initial-view-model')
  return JSON.parse(initialViewModel)
},
viewModel      = getInitialViewModel(),
{ id, schema } = viewModel

module.exports = {
  core :
  {
    page :
    {
      id,
      schema,
      viewModel
    }
  }
}
