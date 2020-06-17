module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'toggle.fieldset'               : 'ui/action/toggle-fieldset',
        'validate.textarea.input.group' : 'ui/action/validate-textarea-input-group',
        'validate.checkbox.input.group' : 'ui/action/validate-checkbox-input-group',
        'validate.date.input.group'     : 'ui/action/validate-date-input-group'
      }
    },
    locator :
    {
      'ui/action/validate-date-input-group'     : `${__dirname}/date-input-group`,
      'ui/action/validate-textarea-input-group' : `${__dirname}/textarea-input-group`,
      'ui/action/validate-checkbox-input-group' : `${__dirname}/checkbox-input-group`,
      'ui/action/toggle-fieldset'               : `${__dirname}/toggle-fieldset`
    }
  }
}
