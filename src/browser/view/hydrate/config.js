module.exports =
{
  core :
  {
    bootstrap :
    {
      hydrate : 'view/hydrate/bootstrap'
    },
    locator :
    {
      'view/hydrate'           : require('./locator'),
      'view/hydrate/bootstrap' : require('./bootstrap/locator'),
    }
  }
}
