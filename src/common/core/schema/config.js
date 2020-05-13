module.exports = {
  core :
  {
    schema :
    {
      composer :
      {
        'edge'      : `${__dirname}/value-object/edge`,
        'node'      : `${__dirname}/entity/node`,
        'tree-node' : `${__dirname}/entity/tree-node`,
        'graph'     : `${__dirname}/entity/graph`,
        'tree'      : `${__dirname}/entity/tree`
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
        'boolean'                    : 'core/schema/validator/boolean',
        'csv'                        : 'core/schema/validator/csv',
        'decimal'                    : 'core/schema/validator/decimal',
        'integer'                    : 'core/schema/validator/integer',
        'json'                       : 'core/schema/validator/json',
        'schema'                     : 'core/schema/validator/schema',
        'string'                     : 'core/schema/validator/string',
        'regexp'                     : 'core/schema/validator/regexp',
        'timestamp'                  : 'core/schema/validator/timestamp',
        'collection'                 : 'core/schema/validator/collection',
        'custom-json'                : 'core/schema/validator/custom-json',
        'node'                       : 'core/schema/validator/node',
        'tree'                       : 'core/schema/validator/tree',
        'tree-node'                  : 'core/schema/validator/tree-node',
        'edge'                       : 'core/schema/validator/edge',
        'associative-array'          : 'core/schema/validator/associative-array',
        'multiple-associative-array' : 'core/schema/validator/multiple-associative-array'
      }
    },
    locator :
    {
      'core/schema/composer'                             : `${__dirname}/composer`,
      'core/schema/filter/boolean'                       : `${__dirname}/filter/boolean`,
      'core/schema/filter/csv'                           : `${__dirname}/filter/csv`,
      'core/schema/filter/decimal'                       : `${__dirname}/filter/decimal`,
      'core/schema/filter/integer'                       : `${__dirname}/filter/integer`,
      'core/schema/filter/json'                          : `${__dirname}/filter/json`,
      'core/schema/filter/schema'                        : `${__dirname}/filter/schema`,
      'core/schema/filter/string'                        : `${__dirname}/filter/string`,
      'core/schema/filter/timestamp'                     : `${__dirname}/filter/timestamp`,
      'core/schema/validator/boolean'                    : `${__dirname}/validator/boolean`,
      'core/schema/validator/csv'                        : `${__dirname}/validator/csv`,
      'core/schema/validator/decimal'                    : `${__dirname}/validator/decimal`,
      'core/schema/validator/integer'                    : `${__dirname}/validator/integer`,
      'core/schema/validator/json'                       : `${__dirname}/validator/json`,
      'core/schema/validator/schema'                     : `${__dirname}/validator/schema`,
      'core/schema/validator/string'                     : `${__dirname}/validator/string`,
      'core/schema/validator/timestamp'                  : `${__dirname}/validator/timestamp`,
      'core/schema/validator/regexp'                     : `${__dirname}/validator/regexp`,
      'core/schema/validator/node'                       : `${__dirname}/validator/node`,
      'core/schema/validator/edge'                       : `${__dirname}/validator/edge`,
      'core/schema/validator/graph'                      : `${__dirname}/validator/graph`,
      'core/schema/validator/tree-node'                  : `${__dirname}/validator/tree-node`,
      'core/schema/validator/tree'                       : `${__dirname}/validator/tree`,
      'core/schema/validator/collection'                 : `${__dirname}/validator/collection`,
      'core/schema/validator/custom-json'                : `${__dirname}/validator/custom-json`,
      'core/schema/validator/associative-array'          : `${__dirname}/validator/associative-array`,
      'core/schema/validator/multiple-associative-array' : `${__dirname}/validator/multiple-associative-array`
    }
  }
}
