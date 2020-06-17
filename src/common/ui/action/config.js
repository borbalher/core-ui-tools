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
        'validate.date.input.group'     : 'ui/action/validate-date-input-group',
        'page-clicked'                  : 'ui/action/page-clicked',
        'prev-pages-clicked'            : 'ui/action/prev-pages-clicked',
        'next-pages-clicked'            : 'ui/action/next-pages-clicked',
        'prev-page-clicked'             : 'ui/action/prev-page-clicked',
        'next-page-clicked'             : 'ui/action/next-page-clicked',
      }
    },
    locator :
    {
      'ui/action/validate-date-input-group'     : `${__dirname}/date-input-group`,
      'ui/action/validate-textarea-input-group' : `${__dirname}/textarea-input-group`,
      'ui/action/validate-checkbox-input-group' : `${__dirname}/checkbox-input-group`,
      'ui/action/toggle-fieldset'               : `${__dirname}/toggle-fieldset`,
      'ui/action/page-clicked'                  : `${__dirname}/page-clicked`,
      'ui/action/prev-pages-clicked'            : `${__dirname}/prev-pages-clicked`,
      'ui/action/next-pages-clicked'            : `${__dirname}/next-pages-clicked`,
      'ui/action/prev-page-clicked'             : `${__dirname}/prev-page-clicked`,
      'ui/action/next-page-clicked'             : `${__dirname}/next-page-clicked`
    }
  }
}
