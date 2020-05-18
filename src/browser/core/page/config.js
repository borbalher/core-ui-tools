const
getInitialViewModel = () =>
{
  const
  initialViewModel  = localStorage.getItem('initial-view-model')
  return JSON.parse(initialViewModel)
},
getPageId = () =>
{
  const
  url         = new URL(window.location.href),
  pathname    = url.pathname.slice(1),
  viewModelId = `${pathname !== '' ? pathname.split('/')[0] : 'home'}-page`

  return viewModelId
}

module.exports = {
  core :
  {
    'page' :
    {
      id     : getPageId(),
      schema : `entity/${getPageId()}`,
      state  : getInitialViewModel()
    }
  }
}
