module.exports = {
  core :
  {
    schema :
    {
      composer :
      {
        'value-object/error'              : `${__dirname}/value-object/error`,
        'value-object/partial'            : `${__dirname}/value-object/partial`,
        'entity/modal'                    : `${__dirname}/entity/modal`,
        'entity/modal-action'             : `${__dirname}/entity/modal-action`,
        'entity/page-blocker'             : `${__dirname}/entity/page-blocker`,
        'entity/number-input'             : `${__dirname}/entity/number-input`,
        'entity/hidden-input'             : `${__dirname}/entity/hidden-input`,
        'entity/date-input'               : `${__dirname}/entity/date-input`,
        'entity/select-input-group'       : `${__dirname}/entity/select-input-group`,
        'entity/select-input'             : `${__dirname}/entity/select-input`,
        'entity/select-input-item'        : `${__dirname}/entity/select-input-item`,
        'entity/form'                     : `${__dirname}/entity/form`,
        'entity/fieldset'                 : `${__dirname}/entity/fieldset`,
        'entity/page'                     : `${__dirname}/entity/page`,
        'entity/pagination'               : `${__dirname}/entity/pagination`,
        'entity/input'                    : `${__dirname}/entity/input`,
        'entity/input-group'              : `${__dirname}/entity/input-group`,
        'entity/password-input-group'     : `${__dirname}/entity/password-input-group`,
        'entity/password-input'           : `${__dirname}/entity/password-input`,
        'entity/text-input'               : `${__dirname}/entity/text-input`,
        'entity/text-input-group'         : `${__dirname}/entity/text-input-group`,
        'entity/textarea-input'           : `${__dirname}/entity/textarea-input`,
        'entity/textarea-input-group'     : `${__dirname}/entity/textarea-input-group`,
        'entity/button-group-input-group' : `${__dirname}/entity/button-group-input-group`,
        'entity/button-group-input'       : `${__dirname}/entity/button-group-input`,
        'entity/button-group-button'      : `${__dirname}/entity/button-group-button`,
        'entity/checkbox-input'           : `${__dirname}/entity/checkbox-input`,
        'entity/checkbox-panel'           : `${__dirname}/entity/checkbox-panel`,
        'entity/checkbox-input-group'     : `${__dirname}/entity/checkbox-input-group`,
        'entity/table'                    : `${__dirname}/entity/table`,
        'entity/component'                : `${__dirname}/entity/component`
      }
    },
    locator :
    {
      'composer/pagination' : `${__dirname}/composer/pagination`
    }
  }
}
