module.exports = {
  core :
  {
    handlebars :
    {
      helpers :
      {
        'calculate'      : 'view/handlebars/helper/calculate',
        'case'           : 'view/handlebars/helper/case',
        'component'      : 'view/handlebars/helper/component',
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
        // 'date'           : 'view/handlebars/helper/date'
      }
    },
    bootstrap :
    {
      'handlebars/helpers' : 'view/handlebars/helpers/bootstrap'
    },
    locator :
    {
      'view/handlebars'                         : __dirname,
      'view/handlebars/helpers/bootstrap'       : `${__dirname}/helper/bootstrap`,
      'view/handlebars/helper/calculate'        : `${__dirname}/helper/calculate`,
      'view/handlebars/helper/component'        : `${__dirname}/helper/component`,
      'view/handlebars/helper/case'             : `${__dirname}/helper/case`,
      'view/handlebars/helper/concat'           : `${__dirname}/helper/concat`,
      'view/handlebars/helper/dateformat'       : `${__dirname}/helper/dateformat`,
      'view/handlebars/helper/default'          : `${__dirname}/helper/default`,
      'view/handlebars/helper/exists'           : `${__dirname}/helper/exists`,
      'view/handlebars/helper/esc-double-quote' : `${__dirname}/helper/esc-double-quote`,
      'view/handlebars/helper/esc-single-quote' : `${__dirname}/helper/esc-single-quote`,
      'view/handlebars/helper/if'               : `${__dirname}/helper/if`,
      'view/handlebars/helper/json-stringify'   : `${__dirname}/helper/json-stringify`,
      'view/handlebars/helper/math'             : `${__dirname}/helper/math`,
      'view/handlebars/helper/strip-tags'       : `${__dirname}/helper/strip-tags`,
      'view/handlebars/helper/switch'           : `${__dirname}/helper/switch`,
      'view/handlebars/helper/to-fixed'         : `${__dirname}/helper/to-fixed`,
      'view/handlebars/helper/to-lower-case'    : `${__dirname}/helper/to-lower-case`,
      'view/handlebars/helper/to-upper-case'    : `${__dirname}/helper/to-upper-case`,
      'view/handlebars/helper/unless'           : `${__dirname}/helper/unless`,
      'view/handlebars/helper/translate'        : `${__dirname}/helper/translate`
      // 'view/handlebars/helper/date'             : `${__dirname}/helper/date`,
    }
  }
}
