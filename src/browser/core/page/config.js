const
getInitialViewModel = () =>
{
  const
  initialViewModel  = localStorage.getItem('initial-view-model')
  return JSON.parse(initialViewModel)
},
getViewModelId = () =>
{
  const
  url         = new URL(window.location.href),
  pathname    = url.pathname.slice(1),
  viewModelId = `${pathname !== '' ? pathname.split('/')[0] : 'home'}-view-model`

  return viewModelId
}

module.exports = {
  core :
  {
    page :
    {
      id     : getViewModelId(),
      schema : `entity/${getViewModelId()}`,
      state  : getInitialViewModel()
    }
  }
}
