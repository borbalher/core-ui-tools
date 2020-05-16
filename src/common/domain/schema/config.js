module.exports = {
  core :
  {
    schema :
    {
      composer :
      {
        'value-object/error'              : `${__dirname}/value-object/error`,
        'value-object/partial'            : `${__dirname}/value-object/partial`,
        'value-object/reference'          : `${__dirname}/value-object/reference`,
        'value-object/binding'            : `${__dirname}/value-object/binding`,
        'value-object/listener'           : `${__dirname}/value-object/listener`,
        'entity/component'                : `${__dirname}/entity/component`,
        'entity/modal'                    : `${__dirname}/entity/modal`,
        'entity/modal-action'             : `${__dirname}/entity/modal-action`,
        'entity/page-blocker'             : `${__dirname}/entity/page-blocker`,
        'entity/page'                     : `${__dirname}/entity/page`,
        'entity/pagination'               : `${__dirname}/entity/pagination`,
        'entity/table'                    : `${__dirname}/entity/table`,
        // FORMS
        'entity/form'                     : `${__dirname}/entity/form`,
        'entity/fieldset'                 : `${__dirname}/entity/fieldset`,
        'entity/toggeable-panel'          : `${__dirname}/entity/toggeable-panel`,
        'entity/input-group'              : `${__dirname}/entity/input-group`,
        // INPUTS
        'entity/input'                    : `${__dirname}/entity/input`,
        'entity/select-input'             : `${__dirname}/entity/select-input`,
        'entity/password-input'           : `${__dirname}/entity/password-input`,
        'entity/text-input'               : `${__dirname}/entity/text-input`,
        'entity/textarea-input'           : `${__dirname}/entity/textarea-input`,
        'entity/radio-button-input'       : `${__dirname}/entity/radio-button-input`,
        'entity/checkbox-input'           : `${__dirname}/entity/checkbox-input`,
        'entity/select-input-group'       : `${__dirname}/entity/select-input-group`,
        'entity/password-input-group'     : `${__dirname}/entity/password-input-group`,
        'entity/text-input-group'         : `${__dirname}/entity/text-input-group`,
        'entity/textarea-input-group'     : `${__dirname}/entity/textarea-input-group`,
        'entity/radio-button-input-group' : `${__dirname}/entity/radio-button-input-group`,
        'entity/checkbox-input-group'     : `${__dirname}/entity/checkbox-input-group`
      }
    },
    locator :
    {
      'core/checkbox-input/composer'           : `${__dirname}/composer/checkbox-input`,
      'core/checkbox-input-group/composer'     : `${__dirname}/composer/checkbox-input-group`,
      'core/component/composer'                : `${__dirname}/composer/component`,
      'core/fieldset/composer'                 : `${__dirname}/composer/fieldset`,
      'core/form/composer'                     : `${__dirname}/composer/form`,
      'core/modal/composer'                    : `${__dirname}/composer/modal`,
      'core/page/composer'                     : `${__dirname}/composer/page`,
      'core/page-blocker/composer'             : `${__dirname}/composer/page-blocker`,
      'core/pagination/composer'               : `${__dirname}/composer/pagination`,
      'core/password-input/composer'           : `${__dirname}/composer/password-input`,
      'core/password-input-group/composer'     : `${__dirname}/composer/password-input-group`,
      'core/radio-button-input/composer'       : `${__dirname}/composer/radio-button-input`,
      'core/radio-button-input-group/composer' : `${__dirname}/composer/radio-button-input-group`,
      'core/select-input/composer'             : `${__dirname}/composer/select-input`,
      'core/select-input-group/composer'       : `${__dirname}/composer/select-input-group`,
      'core/table/composer'                    : `${__dirname}/composer/table`,
      'core/text-input/composer'               : `${__dirname}/composer/text-input`,
      'core/text-input-group/composer'         : `${__dirname}/composer/text-input-group`,
      'core/textarea-input/composer'           : `${__dirname}/composer/textarea-input`,
      'core/textarea-input-group/composer'     : `${__dirname}/composer/textarea-input-group`,
      'core/toggeable-panel/composer'          : `${__dirname}/composer/toggeable-panel`
    }
  }
}
