module.exports = {
  core :
  {
    locator :
    {
      'schema/composer'                        : require(`${__dirname}/composer/locator`),
      'schema/entity/button'                   : require(`${__dirname}/entity/button`),
      'schema/entity/checkbox-input-group'     : require(`${__dirname}/entity/checkbox-input-group`),
      'schema/entity/component'                : require(`${__dirname}/entity/component`),
      'schema/entity/date-input-group'         : require(`${__dirname}/entity/date-input-group`),
      'schema/entity/error'                    : require(`${__dirname}/entity/error`),
      'schema/entity/fieldset'                 : require(`${__dirname}/entity/fieldset`),
      'schema/entity/form'                     : require(`${__dirname}/entity/form`),
      'schema/entity/graph'                    : require(`${__dirname}/entity/graph`),
      'schema/entity/input-group'              : require(`${__dirname}/entity/input-group`),
      'schema/entity/input'                    : require(`${__dirname}/entity/input`),
      'schema/entity/modal-action'             : require(`${__dirname}/entity/modal-action`),
      'schema/entity/modal'                    : require(`${__dirname}/entity/modal`),
      'schema/entity/node'                     : require(`${__dirname}/entity/node`),
      'schema/entity/number-input-group'       : require(`${__dirname}/entity/text-input-group`),
      'schema/entity/page-blocker'             : require(`${__dirname}/entity/page-blocker`),
      'schema/entity/page'                     : require(`${__dirname}/entity/page`),
      'schema/entity/pagination'               : require(`${__dirname}/entity/pagination`),
      'schema/entity/password-input-group'     : require(`${__dirname}/entity/password-input-group`),
      'schema/entity/password-input'           : require(`${__dirname}/entity/password-input`),
      'schema/entity/radio-button-input-group' : require(`${__dirname}/entity/radio-button-input-group`),
      'schema/entity/radio-button-input'       : require(`${__dirname}/entity/radio-button-input`),
      'schema/entity/radio-fieldset'           : require(`${__dirname}/entity/radio-fieldset`),
      'schema/entity/select-input-group'       : require(`${__dirname}/entity/select-input-group`),
      'schema/entity/select-input-item'        : require(`${__dirname}/entity/select-input-item`),
      'schema/entity/table'                    : require(`${__dirname}/entity/table`),
      'schema/entity/text-input-group'         : require(`${__dirname}/entity/text-input-group`),
      'schema/entity/textarea-input-group'     : require(`${__dirname}/entity/textarea-input-group`),
      'schema/entity/toggeable-fieldset'       : require(`${__dirname}/entity/toggeable-fieldset`),
      'schema/entity/tree-node'                : require(`${__dirname}/entity/tree-node`),
      'schema/entity/tree'                     : require(`${__dirname}/entity/tree`),
      'schema/filter/boolean'                  : require(`${__dirname}/filter/boolean/locator`),
      'schema/filter/csv'                      : require(`${__dirname}/filter/csv/locator`),
      'schema/filter/decimal'                  : require(`${__dirname}/filter/decimal/locator`),
      'schema/filter/integer'                  : require(`${__dirname}/filter/integer/locator`),
      'schema/filter/json'                     : require(`${__dirname}/filter/json/locator`),
      'schema/filter/schema'                   : require(`${__dirname}/filter/schema/locator`),
      'schema/filter/string'                   : require(`${__dirname}/filter/string/locator`),
      'schema/filter/timestamp'                : require(`${__dirname}/filter/timestamp/locator`),
      'schema/validator/boolean'               : require(`${__dirname}/validator/boolean/locator`),
      'schema/validator/csv'                   : require(`${__dirname}/validator/csv/locator`),
      'schema/validator/decimal'               : require(`${__dirname}/validator/decimal/locator`),
      'schema/validator/integer'               : require(`${__dirname}/validator/integer/locator`),
      'schema/validator/json'                  : require(`${__dirname}/validator/json/locator`),
      'schema/validator/regexp'                : require(`${__dirname}/validator/regexp/locator`),
      'schema/validator/schema'                : require(`${__dirname}/validator/schema/locator`),
      'schema/validator/string'                : require(`${__dirname}/validator/string/locator`),
      'schema/validator/timestamp'             : require(`${__dirname}/validator/timestamp/locator`),
      'schema/value/binding'                   : require(`${__dirname}/value/binding`),
      'schema/value/dataset'                   : require(`${__dirname}/value/dataset`),
      'schema/value/edge'                      : require(`${__dirname}/value/edge`),
      'schema/value/error'                     : require(`${__dirname}/value/error`),
      'schema/value/listener'                  : require(`${__dirname}/value/listener`),
      'schema/value/partial'                   : require(`${__dirname}/value/partial`),
    }
  },
  schema :
  {
    schema :
    {
      'entity/button'                   : 'schema/entity/button',
      'entity/checkbox-input-group'     : 'schema/entity/checkbox-input-group',
      'entity/component'                : 'schema/entity/component',
      'entity/date-input-group'         : 'schema/entity/date-input-group',
      'entity/error'                    : 'schema/entity/error',
      'entity/fieldset'                 : 'schema/entity/fieldset',
      'entity/form'                     : 'schema/entity/form',
      'entity/graph'                    : 'schema/entity/graph',
      'entity/input-group'              : 'schema/entity/input-group',
      'entity/input'                    : 'schema/entity/input',
      'entity/modal-action'             : 'schema/entity/modal-action',
      'entity/modal'                    : 'schema/entity/modal',
      'entity/node'                     : 'schema/entity/node',
      'entity/number-input-group'       : 'schema/entity/number-input-group',
      'entity/page-blocker'             : 'schema/entity/page-blocker',
      'entity/page'                     : 'schema/entity/page',
      'entity/pagination'               : 'schema/entity/pagination',
      'entity/password-input-group'     : 'schema/entity/password-input-group',
      'entity/password-input'           : 'schema/entity/password-input',
      'entity/radio-button-input-group' : 'schema/entity/radio-button-input-group',
      'entity/radio-button-input'       : 'schema/entity/radio-button-input',
      'entity/radio-fieldset'           : 'schema/entity/radio-fieldset',
      'entity/select-input-group'       : 'schema/entity/select-input-group',
      'entity/select-input-item'        : 'schema/entity/select-input-item',
      'entity/table'                    : 'schema/entity/table',
      'entity/text-input-group'         : 'schema/entity/text-input-group',
      'entity/textarea-input-group'     : 'schema/entity/textarea-input-group',
      'entity/toggeable-fieldset'       : 'schema/entity/toggeable-fieldset',
      'entity/tree-node'                : 'schema/entity/tree-node',
      'entity/tree'                     : 'schema/entity/tree',
      'value/binding'                   : 'schema/value/binding',
      'value/dataset'                   : 'schema/value/dataset',
      'value/edge'                      : 'schema/value/edge',
      'value/error'                     : 'schema/value/error',
      'value/listener'                  : 'schema/value/listener',
      'value/partial'                   : 'schema/value/partial',
    },
    filter :
    {
      'boolean'   : 'schema/filter/boolean',
      'csv'       : 'schema/filter/csv',
      'decimal'   : 'schema/filter/decimal',
      'integer'   : 'schema/filter/integer',
      'json'      : 'schema/filter/json',
      'schema'    : 'schema/filter/schema',
      'string'    : 'schema/filter/string',
      'timestamp' : 'schema/filter/timestamp',
    },
    validator :
    {
      'boolean'   : 'schema/validator/boolean',
      'csv'       : 'schema/validator/csv',
      'decimal'   : 'schema/validator/decimal',
      'integer'   : 'schema/validator/integer',
      'json'      : 'schema/validator/json',
      'schema'    : 'schema/validator/schema',
      'string'    : 'schema/validator/string',
      'regexp'    : 'schema/validator/regexp',
      'timestamp' : 'schema/validator/timestamp',
    }
  }
}
