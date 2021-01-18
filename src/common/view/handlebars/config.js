module.exports = {
  core :
  {
    handlebars :
    {
      helpers :
      {
        'calculate'      : 'view/handlebars/helper/calculate',
        'case'           : 'view/handlebars/helper/case',
        'concat'         : 'view/handlebars/helper/concat',
        'dateformat'     : 'view/handlebars/helper/dateformat',
        'default'        : 'view/handlebars/helper/default',
        'escDoubleQuote' : 'view/handlebars/helper/esc-double-quote',
        'escSingleQuote' : 'view/handlebars/helper/esc-single-quote',
        'if'             : 'view/handlebars/helper/if',
        'jsonStringify'  : 'view/handlebars/helper/json-stringify',
        'math'           : 'view/handlebars/helper/math',
        'stripTags'      : 'view/handlebars/helper/strip-tags',
        'switch'         : 'view/handlebars/helper/switch',
        'toFixed'        : 'view/handlebars/helper/to-fixed',
        'toLowerCase'    : 'view/handlebars/helper/to-lower-case',
        'toUpperCase'    : 'view/handlebars/helper/to-upper-case',
        'unless'         : 'view/handlebars/helper/unless',
        'exists'         : 'view/handlebars/helper/exists',
        'translate'      : 'view/handlebars/helper/translate'
      }
    },
    bootstrap :
    {
      'handlebars/helpers' : 'view/handlebars/helpers/bootstrap'
    },
    locator :
    {
      'view/handlebars'                         : require(`${__dirname}/locator`),
      'view/handlebars/helpers/bootstrap'       : require(`${__dirname}/helper/bootstrap`),
      'view/handlebars/helper/calculate'        : require(`${__dirname}/helper/calculate`),
      'view/handlebars/helper/component'        : require(`${__dirname}/helper/component`),
      'view/handlebars/helper/case'             : require(`${__dirname}/helper/case`),
      'view/handlebars/helper/concat'           : require(`${__dirname}/helper/concat`),
      'view/handlebars/helper/dateformat'       : require(`${__dirname}/helper/dateformat`),
      'view/handlebars/helper/default'          : require(`${__dirname}/helper/default`),
      'view/handlebars/helper/exists'           : require(`${__dirname}/helper/exists`),
      'view/handlebars/helper/esc-double-quote' : require(`${__dirname}/helper/esc-double-quote`),
      'view/handlebars/helper/esc-single-quote' : require(`${__dirname}/helper/esc-single-quote`),
      'view/handlebars/helper/if'               : require(`${__dirname}/helper/if`),
      'view/handlebars/helper/json-stringify'   : require(`${__dirname}/helper/json-stringify`),
      'view/handlebars/helper/math'             : require(`${__dirname}/helper/math`),
      'view/handlebars/helper/strip-tags'       : require(`${__dirname}/helper/strip-tags`),
      'view/handlebars/helper/switch'           : require(`${__dirname}/helper/switch`),
      'view/handlebars/helper/to-fixed'         : require(`${__dirname}/helper/to-fixed`),
      'view/handlebars/helper/to-lower-case'    : require(`${__dirname}/helper/to-lower-case`),
      'view/handlebars/helper/to-upper-case'    : require(`${__dirname}/helper/to-upper-case`),
      'view/handlebars/helper/unless'           : require(`${__dirname}/helper/unless`),
      'view/handlebars/helper/translate'        : require(`${__dirname}/helper/translate`)
    }
  }
}
