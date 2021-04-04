module.exports =
{
  core :
  {
    locator :
    {
      'view/atoms/button'                    : require('./atoms/button/locator'),
      'view/atoms/label'                     : require('./atoms/label/locator'),
      'view/component/clock'                 : require('./clock/locator'),
      'view/component/counter'               : require('./counter/locator'),
      'view/component/dynamic-rendering'     : require('./dynamic-rendering/locator'),
      'view/component/progressive-hydration' : require('./progressive-hydration/locator'),
      'view/component/static-content'        : require('./static-content/locator'),
      'view/component/todos'                 : require('./todos/locator'),
      'view/molecules/checkbox-input'        : require('./molecules/checkbox-input/locator'),
      'view/molecules/fieldset'              : require('./molecules/fieldset/locator'),
      'view/molecules/form'                  : require('./molecules/form/locator'),
      'view/molecules/input-group'           : require('./molecules/input-group/locator'),
      'view/molecules/number-input'          : require('./molecules/number-input/locator'),
      'view/molecules/password-input'        : require('./molecules/password-input/locator'),
      'view/molecules/radio-input'           : require('./molecules/radio-input/locator'),
      'view/molecules/select'                : require('./molecules/select/locator'),
      'view/molecules/text-input'            : require('./molecules/text-input/locator'),
      'view/molecules/textarea'              : require('./molecules/textarea/locator'),
      'view/molecules/toggeable-fieldset'    : require('./molecules/toggeable-fieldset/locator'),
      'view/organisms/login'                 : require('./organisms/login/locator'),
      'view/pages/playground'                : require('./pages/playground/locator'),
    }
  }
}
