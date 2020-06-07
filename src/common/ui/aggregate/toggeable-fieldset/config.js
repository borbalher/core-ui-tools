module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'toggle.fieldset' : 'ui/toggeable-fieldset/action/toggle-fieldset'
      }
    },
    locator :
    {
      'ui/toggeable-fieldset/action/toggle-fieldset' : `${__dirname}/action/toggle-fieldset`
    }
  }
}
