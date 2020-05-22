module.exports = {
  core :
  {
    schema :
    {
      composer :
      {
        'value/edge'                      : `value-object/edge`,
        'entity/error'                    : `entity/error`,
        'entity/node'                     : `entity/node`,
        'entity/tree-node'                : `entity/tree-node`,
        'entity/graph'                    : `entity/graph`,
        'entity/tree'                     : `entity/tree`,
        'value-object/error'              : 'value-object/error',
        'value-object/binding'            : 'value-object/binding',
        'value-object/listener'           : 'value-object/listener',
        'entity/component'                : 'entity/component',
        'entity/modal'                    : 'entity/modal',
        'entity/modal-action'             : 'entity/modal-action',
        'entity/page-blocker'             : 'entity/page-blocker',
        'entity/page'                     : 'entity/page',
        'entity/pagination'               : 'entity/pagination',
        'entity/table'                    : 'entity/table',
        'entity/button'                   : 'entity/button',
        'entity/form'                     : 'entity/form',
        'entity/fieldset'                 : 'entity/fieldset',
        'entity/toggeable-panel'          : 'entity/toggeable-panel',
        'entity/input-group'              : 'entity/input-group',
        'entity/input'                    : 'entity/input',
        'entity/select-input'             : 'entity/select-input',
        'entity/select-input-item'        : 'entity/select-input-item',
        'entity/password-input'           : 'entity/password-input',
        'entity/text-input'               : 'entity/text-input',
        'entity/textarea-input'           : 'entity/textarea-input',
        'entity/radio-button-input'       : 'entity/radio-button-input',
        'entity/checkbox-input'           : 'entity/checkbox-input',
        'entity/select-input-group'       : 'entity/select-input-group',
        'entity/password-input-group'     : 'entity/password-input-group',
        'entity/text-input-group'         : 'entity/text-input-group',
        'entity/textarea-input-group'     : 'entity/textarea-input-group',
        'entity/radio-button-input-group' : 'entity/radio-button-input-group',
        'entity/checkbox-input-group'     : 'entity/checkbox-input-group'
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
