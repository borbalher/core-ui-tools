module.exports = {
  core :
  {
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
    locator :
    {
      'ui/middleware/checkbox-input-group'     : `${__dirname}/middleware/checkbox-input-group`,
      'ui/middleware/date-input-group'         : `${__dirname}/middleware/date-input-group`,
      'ui/middleware/modal-flow'               : `${__dirname}/middleware/modal-flow`,
      'ui/middleware/number-input-group'       : `${__dirname}/middleware/number-input-group`,
      'ui/middleware/page-blocker'             : `${__dirname}/middleware/page-blocker`,
      'ui/middleware/pagination'               : `${__dirname}/middleware/pagination`,
      'ui/middleware/password-input-group'     : `${__dirname}/middleware/password-input-group`,
      'ui/middleware/radio-button-input-group' : `${__dirname}/middleware/radio-button-input-group`,
      'ui/middleware/select-input-group'       : `${__dirname}/middleware/select-input-group`,
      'ui/middleware/text-input-group'         : `${__dirname}/middleware/text-input-group`,
      'ui/middleware/textarea-input-group'     : `${__dirname}/middleware/textarea-input-group`
    }
  }
}
