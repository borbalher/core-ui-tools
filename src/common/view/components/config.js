module.exports =
{
  core :
  {
    locator :
    {
      'view/component/dynamic-rendering' : require('./dynamic-rendering/locator'),
      'view/component/todos'             : require('./todos/locator'),
      'view/component/clock'             : require('./clock/locator'),
      'view/component/counter'           : require('./counter/locator')
    }
  }
}
