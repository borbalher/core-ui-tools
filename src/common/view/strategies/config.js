module.exports =
{
  core :
  {
    locator :
    {
      'view/strategies/static'      : require('./static/locator'),
      'view/strategies/dynamic'     : require('./dynamic/locator'),
      'view/strategies/progressive' : require('./progressive/locator'),
    }
  }
}
