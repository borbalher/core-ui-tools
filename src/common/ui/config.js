module.exports = {
  core :
  {
    dictionary :
    {
      dictionaries :
      {
        'en-gb' :
        {
          'IS_REQUIRED'                         : '##LABEL## is required',
          'DATE_MUST_BE_AFTER'                  : 'Date must be after ##DATE##',
          'DATE_MUST_BE_BEFORE'                 : 'Date must be before ##DATE##',
          'IS_NOT_A_DATE'                       : '##LABEL## is not a date',
          'ONLY_SET_ALLOWED'                    : 'Only ##SET## allowed',
          'RATIONAL_NUMBERS'                    : 'rational numbers',
          'RATIONAL_NUMBERS_UP_TO_MAX_DECIMALS' : 'rational numbers up to ##MAX_DECIMALS## decimals',
          'INTEGER_NUMBERS'                     : 'integer numbers',
          'NATURAL_NUMBERS'                     : 'natural numbers',
          'BETWEEN_MIN_MAX'                     : 'between ##MIN## and ##MAX##',
          'BIGGER_OR_EQUAL'                     : 'bigger or equal ##MIN##',
          'LESSER_OR_EQUAL'                     : 'lesser or equal ##MAX##',
          'INVALID_FORMAT'                      : 'Invalid format',
          'MINIMUN_VALUE_IS'                    : 'Minimum value is ##MIN##',
          'MAXIMUM_VALUE_IS'                    : 'Maximum value is ##MAX##'
        },
        'es' :
        {
          'IS_REQUIRED'                         : '##LABEL## es obligatorio',
          'DATE_MUST_BE_AFTER'                  : 'La fecha debe ser posterior a ##DATE##',
          'DATE_MUST_BE_BEFORE'                 : 'La fecha debe ser anterior a ##DATE##',
          'IS_NOT_A_DATE'                       : '##LABEL## no es una fecha',
          'ONLY_SET_ALLOWED'                    : 'Solamente se permite ##SET##',
          'RATIONAL_NUMBERS'                    : 'números racionales',
          'RATIONAL_NUMBERS_UP_TO_MAX_DECIMALS' : 'números racionales de hasta ##MAX_DECIMALS## decimales',
          'INTEGER_NUMBERS'                     : 'números enteros',
          'NATURAL_NUMBERS'                     : 'números naturales',
          'BETWEEN_MIN_MAX'                     : 'entre ##MIN## y ##MAX##',
          'BIGGER_OR_EQUAL'                     : 'mayor o igual ##MIN##',
          'LESSER_OR_EQUAL'                     : 'menor o igual ##MAX##',
          'INVALID_FORMAT'                      : 'Formato inválido',
          'MINIMUN_VALUE_IS'                    : 'El valor mínimo es ##MIN##',
          'MAXIMUM_VALUE_IS'                    : 'El valor máximo es ##MAX##'
        }
      }
    },
    locator :
    {
      'ui/composer/checkbox-input'                  : `${__dirname}/composer/checkbox-input`,
      'ui/composer/checkbox-input-group'            : `${__dirname}/composer/checkbox-input-group`,
      'ui/composer/component'                       : `${__dirname}/composer/component`,
      'ui/composer/date-input-group'                : `${__dirname}/composer/date-input-group`,
      'ui/composer/fieldset'                        : `${__dirname}/composer/fieldset`,
      'ui/composer/form'                            : `${__dirname}/composer/form`,
      'ui/composer/modal'                           : `${__dirname}/composer/modal`,
      'ui/composer/number-input-group'              : `${__dirname}/composer/number-input-group`,
      'ui/composer/page'                            : `${__dirname}/composer/page`,
      'ui/composer/page-blocker'                    : `${__dirname}/composer/page-blocker`,
      'ui/composer/pagination'                      : `${__dirname}/composer/pagination`,
      'ui/composer/password-input'                  : `${__dirname}/composer/password-input`,
      'ui/composer/password-input-group'            : `${__dirname}/composer/password-input-group`,
      'ui/composer/radio-button-input'              : `${__dirname}/composer/radio-button-input`,
      'ui/composer/radio-button-input-group'        : `${__dirname}/composer/radio-button-input-group`,
      'ui/composer/radio-fieldset'                  : `${__dirname}/composer/radio-fieldset`,
      'ui/composer/select-input'                    : `${__dirname}/composer/select-input`,
      'ui/composer/select-input-group'              : `${__dirname}/composer/select-input-group`,
      'ui/composer/table'                           : `${__dirname}/composer/table`,
      'ui/composer/text-input'                      : `${__dirname}/composer/text-input`,
      'ui/composer/text-input-group'                : `${__dirname}/composer/text-input-group`,
      'ui/composer/textarea-input'                  : `${__dirname}/composer/textarea-input`,
      'ui/composer/textarea-input-group'            : `${__dirname}/composer/textarea-input-group`,
      'ui/composer/toggeable-fieldset'              : `${__dirname}/composer/toggeable-fieldset`,
      'ui/component/controller/factory'             : `${__dirname}/controller`,
      'ui/action/block-page'                        : `${__dirname}/action/block-page`,
      'ui/action/close-modal'                       : `${__dirname}/action/close-modal`,
      'ui/action/next-page-clicked'                 : `${__dirname}/action/next-page-clicked`,
      'ui/action/next-pages-clicked'                : `${__dirname}/action/next-pages-clicked`,
      'ui/action/open-modal'                        : `${__dirname}/action/open-modal`,
      'ui/action/page-clicked'                      : `${__dirname}/action/page-clicked`,
      'ui/action/prev-page-clicked'                 : `${__dirname}/action/prev-page-clicked`,
      'ui/action/prev-pages-clicked'                : `${__dirname}/action/prev-pages-clicked`,
      'ui/action/redirect'                          : `${__dirname}/action/redirect`,
      'ui/action/reload'                            : `${__dirname}/action/reload`,
      'ui/action/show-alert'                        : `${__dirname}/action/show-alert`,
      'ui/action/toggle-blocker'                    : `${__dirname}/action/toggle-blocker`,
      'ui/action/toggle-fieldset'                   : `${__dirname}/action/toggle-fieldset`,
      'ui/action/toggle-radio-fieldset'             : `${__dirname}/action/toggle-radio-fieldset`,
      'ui/action/unblock-page'                      : `${__dirname}/action/unblock-page`,
      'ui/action/validate-checkbox-input-group'     : `${__dirname}/action/validate-checkbox-input-group`,
      'ui/action/validate-date-input-group'         : `${__dirname}/action/validate-date-input-group`,
      'ui/action/validate-number-input-group'       : `${__dirname}/action/validate-number-input-group`,
      'ui/action/validate-password-input-group'     : `${__dirname}/action/validate-password-input-group`,
      'ui/action/validate-radio-button-input-group' : `${__dirname}/action/validate-radio-button-input-group`,
      'ui/action/validate-select-input-group'       : `${__dirname}/action/validate-select-input-group`,
      'ui/action/validate-text-input-group'         : `${__dirname}/action/validate-text-input-group`,
      'ui/action/validate-textarea-input-group'     : `${__dirname}/action/validate-textarea-input-group`,
      'ui/middleware/checkbox-input-group'          : `${__dirname}/middleware/checkbox-input-group`,
      'ui/middleware/date-input-group'              : `${__dirname}/middleware/date-input-group`,
      'ui/middleware/modal-flow'                    : `${__dirname}/middleware/modal-flow`,
      'ui/middleware/number-input-group'            : `${__dirname}/middleware/number-input-group`,
      'ui/middleware/page-blocker'                  : `${__dirname}/middleware/page-blocker`,
      'ui/middleware/pagination'                    : `${__dirname}/middleware/pagination`,
      'ui/middleware/password-input-group'          : `${__dirname}/middleware/password-input-group`,
      'ui/middleware/radio-button-input-group'      : `${__dirname}/middleware/radio-button-input-group`,
      'ui/middleware/select-input-group'            : `${__dirname}/middleware/select-input-group`,
      'ui/middleware/text-input-group'              : `${__dirname}/middleware/text-input-group`,
      'ui/middleware/textarea-input-group'          : `${__dirname}/middleware/textarea-input-group`,
      'ui/mapper/checkbox'                          : `${__dirname}/mapper/checkbox`,
      'ui/mapper/form'                              : `${__dirname}/mapper/form`,
      'ui/mapper/input'                             : `${__dirname}/mapper/input`,
      'ui/mapper/modal-action'                      : `${__dirname}/mapper/modal-action`,
      'ui/mapper/page-number'                       : `${__dirname}/mapper/page-number`,
      'ui/mapper/select'                            : `${__dirname}/mapper/select`,
      'ui/mapper/table-action'                      : `${__dirname}/mapper/table-action`
    }
  },
  ui :
  {
    component :
    {
      'checkbox-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/checkbox'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.checkbox.input.group',
            dispatch : true
          }
        ]
      },
      'date-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="date"]',
            domEvent       : 'blur',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'blur',
            map      : 'validate.date.input.group',
            dispatch : true
          }
        ]
      },
      'modal' :
      {
        bindings :
        [
          {
            selector       : '[data-action]',
            domEvent       : 'click',
            domEventMapper : 'ui/mapper/modal-action',
            event          : 'dispatch.action',
            dispatch       : true,
            preventDefault : true
          }
        ]
      },
      'number-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="number"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.number.input.group',
            dispatch : true
          }
        ]
      },
      'page-blocker' :
      {
        listeners :
        [
          {
            channel  : 'ui',
            event    : 'toggle.blocker',
            dispatch : true
          }
        ]
      },
      'pagination' :
      {
        bindings :
        [
          {
            selector       : '.pagination__page__number',
            domEvent       : 'click',
            domEventMapper : 'ui/mapper/page-number',
            event          : 'page.clicked',
            dispatch       : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-pages',
            event    : 'prev.pages.clicked',
            dispatch : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-pages',
            event    : 'next.pages.clicked',
            dispatch : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-page',
            event    : 'next.page.clicked',
            dispatch : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-page',
            event    : 'prev.page.clicked',
            dispatch : true
          }
        ]
      },
      'password-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="password"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.password.input.group',
            dispatch : true
          }
        ]
      },
      'radio-button-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="radio"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.radio.button.input.group',
            dispatch : true
          }
        ]
      },
      'radio-fieldset' :
      {
        bindings :
        [
          {
            selector       : '.radio-fieldset-toggle',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/checkbox',
            event          : 'toggle.fieldset',
            dispatch       : true
          }
        ]
      },
      'select-input-group' :
      {
        bindings :
        [
          {
            selector       : 'select',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/select'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.select.input.group',
            dispatch : true
          }
        ]
      },
      'text-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="text"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.text.input.group',
            dispatch : true
          }
        ]
      },
      'textarea-input-group' :
      {
        bindings :
        [
          {
            selector       : 'textarea',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.textarea.input.group',
            dispatch : true
          }
        ]
      },
      'toggeable-fieldset' :
      {
        bindings :
        [
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/checkbox',
            event          : 'toggle.fieldset',
            dispatch       : true
          }
        ]
      }
    },
    store :
    {
      middlewares : [
        'ui/middleware/checkbox-input-group',
        'ui/middleware/date-input-group',
        'ui/middleware/modal-flow',
        'ui/middleware/number-input-group',
        'ui/middleware/page-blocker',
        'ui/middleware/pagination',
        'ui/middleware/password-input-group',
        'ui/middleware/radio-button-input-group',
        'ui/middleware/select-input-group',
        'ui/middleware/text-input-group',
        'ui/middleware/textarea-input-group'
      ]
    },
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
    }
  }
}
