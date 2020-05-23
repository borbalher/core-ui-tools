module.exports = {
  core :
  {
    schema :
    {
      composer :
      {
        'value/edge'                      : `${__dirname}/value-object/edge`,
        'entity/error'                    : `${__dirname}/entity/error`,
        'entity/node'                     : `${__dirname}/entity/node`,
        'entity/tree-node'                : `${__dirname}/entity/tree-node`,
        'entity/graph'                    : `${__dirname}/entity/graph`,
        'entity/tree'                     : `${__dirname}/entity/tree`,
        'value-object/error'              : `${__dirname}/value-object/error`,
        'value-object/binding'            : `${__dirname}/value-object/binding`,
        'value-object/listener'           : `${__dirname}/value-object/listener`,
        'entity/component'                : `${__dirname}/entity/component`,
        'entity/modal'                    : `${__dirname}/entity/modal`,
        'entity/modal-action'             : `${__dirname}/entity/modal-action`,
        'entity/page-blocker'             : `${__dirname}/entity/page-blocker`,
        'entity/page'                     : `${__dirname}/entity/page`,
        'entity/pagination'               : `${__dirname}/entity/pagination`,
        'entity/table'                    : `${__dirname}/entity/table`,
        'entity/button'                   : `${__dirname}/entity/button`,
        'entity/form'                     : `${__dirname}/entity/form`,
        'entity/fieldset'                 : `${__dirname}/entity/fieldset`,
        'entity/toggeable-panel'          : `${__dirname}/entity/toggeable-panel`,
        'entity/input-group'              : `${__dirname}/entity/input-group`,
        'entity/input'                    : `${__dirname}/entity/input`,
        'entity/select-input'             : `${__dirname}/entity/select-input`,
        'entity/select-input-item'        : `${__dirname}/entity/select-input-item`,
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
      },
      filter :
      {
        'boolean'   : 'core/schema/filter/boolean',
        'csv'       : 'core/schema/filter/csv',
        'decimal'   : 'core/schema/filter/decimal',
        'integer'   : 'core/schema/filter/integer',
        'json'      : 'core/schema/filter/json',
        'schema'    : 'core/schema/filter/schema',
        'string'    : 'core/schema/filter/string',
        'timestamp' : 'core/schema/filter/timestamp'
      },
      validator :
      {
        'boolean'   : 'core/schema/validator/boolean',
        'csv'       : 'core/schema/validator/csv',
        'decimal'   : 'core/schema/validator/decimal',
        'integer'   : 'core/schema/validator/integer',
        'json'      : 'core/schema/validator/json',
        'schema'    : 'core/schema/validator/schema',
        'string'    : 'core/schema/validator/string',
        'regexp'    : 'core/schema/validator/regexp',
        'timestamp' : 'core/schema/validator/timestamp'
      }
    },
    locator :
    {
      'core/schema/composer'            : `${__dirname}/composer`,
      'core/schema/filter/boolean'      : `${__dirname}/filter/boolean`,
      'core/schema/filter/csv'          : `${__dirname}/filter/csv`,
      'core/schema/filter/decimal'      : `${__dirname}/filter/decimal`,
      'core/schema/filter/integer'      : `${__dirname}/filter/integer`,
      'core/schema/filter/json'         : `${__dirname}/filter/json`,
      'core/schema/filter/schema'       : `${__dirname}/filter/schema`,
      'core/schema/filter/string'       : `${__dirname}/filter/string`,
      'core/schema/filter/timestamp'    : `${__dirname}/filter/timestamp`,
      'core/schema/validator/boolean'   : `${__dirname}/validator/boolean`,
      'core/schema/validator/csv'       : `${__dirname}/validator/csv`,
      'core/schema/validator/decimal'   : `${__dirname}/validator/decimal`,
      'core/schema/validator/integer'   : `${__dirname}/validator/integer`,
      'core/schema/validator/json'      : `${__dirname}/validator/json`,
      'core/schema/validator/schema'    : `${__dirname}/validator/schema`,
      'core/schema/validator/string'    : `${__dirname}/validator/string`,
      'core/schema/validator/timestamp' : `${__dirname}/validator/timestamp`,
      'core/schema/validator/regexp'    : `${__dirname}/validator/regexp`
    }
  }
}
