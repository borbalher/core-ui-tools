module.exports =
{
  core :
  {
    locator :
    {
      'view/component/todos'   : require('./todos/locator'),
      'view/component/clock'   : require('./clock/locator'),
      'view/component/counter' : require('./counter/locator'),
      'view/component/index'   : require('./index/locator')
    }
  }
}
