module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'toggle.fieldset' : 'ui/radio-fieldset/action/toggle-fieldset'
      }
    },
    locator :
    {
      'ui/radio-fieldset/action/toggle-fieldset' : `${__dirname}/action/toggle-fieldset`
    }
  }
}
