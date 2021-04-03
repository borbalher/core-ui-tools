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
      'view/component/counter'               : require('./counter/locator'),
      'view/atoms/button'                    : require('./atoms/button/locator'),
      'view/atoms/label'                     : require('./atoms/label/locator'),
      'view/molecules/input-group'           : require('./molecules/input-group/locator'),
      'view/molecules/text-input'            : require('./molecules/text-input/locator'),
      'view/pages/playground'                : require('./pages/playground/locator'),
    }
  }
}
