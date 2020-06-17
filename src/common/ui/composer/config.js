module.exports = {
  core :
  {
    locator :
    {
      'ui/toggeable-fieldset/composer'   : `${__dirname}/toggeable-fieldset`,
      'ui/checkbox-input-group/composer' : `${__dirname}/checkbox-input-group`,
      'ui/checkbox-input/composer'       : `${__dirname}/checkbox-input`,
      'ui/text-input-group/composer'     : `${__dirname}/text-input-group`,
      'ui/text-input/composer'           : `${__dirname}/text-input`,
      'ui/textarea-input-group/composer' : `${__dirname}/textarea-input-group`,
      'ui/textarea-input/composer'       : `${__dirname}/textarea-input`,
      'ui/date-input/composer'           : `${__dirname}/date-input-group`,
      'ui/component/composer'            : `${__dirname}/component`
    }
  },
  ui :
  {
    'component' :
    {
      'date-input-group' :
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
            map      : 'validate.date.input',
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
            map      : 'validate.textarea.input',
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
            map      : 'validate.textarea.input',
            dispatch : true
          }
        ]
      },
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
            map      : 'validate.checkbox.input',
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
    }
  }
}
