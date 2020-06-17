module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'block.page'                        : 'ui/action/block-page',
        'close.modal'                       : 'ui/action/close-modal',
        'next.page.clicked'                 : 'ui/action/next-page-clicked',
        'next.pages.clicked'                : 'ui/action/next-pages-clicked',
        'open.modal'                        : 'ui/action/open-modal',
        'page.clicked'                      : 'ui/action/page-clicked',
        'prev.page.clicked'                 : 'ui/action/prev-page-clicked',
        'prev.pages.clicked'                : 'ui/action/prev-pages-clicked',
        'redirect'                          : 'ui/action/redirect',
        'reload'                            : 'ui/action/reload',
        'show.alert'                        : 'ui/action/show-alert',
        'toggle.blocker'                    : 'ui/action/toggle-blocker',
        'toggle.fieldset'                   : 'ui/action/toggle-fieldset',
        'toggle.radio.fieldset'             : 'ui/action/toggle-radio-fieldset',
        'unblock.page'                      : 'ui/action/unblock-page',
        'validate.checkbox.input.group'     : 'ui/action/validate-checkbox-input-group',
        'validate.date.input.group'         : 'ui/action/validate-date-input-group',
        'validate.number.input.group'       : 'ui/action/validate-number-input-group',
        'validate.password.input.group'     : 'ui/action/validate-password-input-group',
        'validate.radio.button.input.group' : 'ui/action/validate-radio-button-input-group',
        'validate.select.input.group'       : 'ui/action/validate-select-input-group',
        'validate.text.input.group'         : 'ui/action/validate-text-input-group',
        'validate.textarea.input.group'     : 'ui/action/validate-textarea-input-group'
      }
    },
    locator :
    {
      'ui/action/block-page'                        : `${__dirname}/block-page`,
      'ui/action/close-modal'                       : `${__dirname}/close-modal`,
      'ui/action/next-page-clicked'                 : `${__dirname}/next-page-clicked`,
      'ui/action/next-pages-clicked'                : `${__dirname}/next-pages-clicked`,
      'ui/action/open-modal'                        : `${__dirname}/open-modal`,
      'ui/action/page-clicked'                      : `${__dirname}/page-clicked`,
      'ui/action/prev-page-clicked'                 : `${__dirname}/prev-page-clicked`,
      'ui/action/prev-pages-clicked'                : `${__dirname}/prev-pages-clicked`,
      'ui/action/redirect'                          : `${__dirname}/redirect`,
      'ui/action/reload'                            : `${__dirname}/reload`,
      'ui/action/show-alert'                        : `${__dirname}/show-alert`,
      'ui/action/toggle-blocker'                    : `${__dirname}/toggle-blocker`,
      'ui/action/toggle-fieldset'                   : `${__dirname}/toggle-fieldset`,
      'ui/action/toggle-radio-fieldset'             : `${__dirname}/toggle-radio-fieldset`,
      'ui/action/unblock-page'                      : `${__dirname}/unblock-page`,
      'ui/action/validate-checkbox-input-group'     : `${__dirname}/validate-checkbox-input-group`,
      'ui/action/validate-date-input-group'         : `${__dirname}/validate-date-input-group`,
      'ui/action/validate-number-input-group'       : `${__dirname}/validate-number-input-group`,
      'ui/action/validate-password-input-group'     : `${__dirname}/validate-password-input-group`,
      'ui/action/validate-radio-button-input-group' : `${__dirname}/validate-radio-button-input-group`,
      'ui/action/validate-select-input-group'       : `${__dirname}/validate-select-input-group`,
      'ui/action/validate-text-input-group'         : `${__dirname}/validate-text-input-group`,
      'ui/action/validate-textarea-input-group'     : `${__dirname}/validate-textarea-input-group`
    }
  }
}
