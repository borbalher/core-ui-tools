module.exports =
{
  core :
  {
    locator :
    {
      'view/component/progressive-hydration' : require('./progressive-hydration/locator'),
      'view/component/dynamic-rendering'     : require('./dynamic-rendering/locator'),
      'view/component/static-content'        : require('./static-content/locator'),
      'view/component/todos'                 : require('./todos/locator'),
      'view/component/clock'                 : require('./clock/locator'),
      'view/component/counter'               : require('./counter/locator')
    }
  }
}
