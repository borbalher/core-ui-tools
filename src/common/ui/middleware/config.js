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
      'ui/middleware/checkbox-input-group'     : `${__dirname}/checkbox-input-group`,
      'ui/middleware/date-input-group'         : `${__dirname}/date-input-group`,
      'ui/middleware/modal-flow'               : `${__dirname}/modal-flow`,
      'ui/middleware/number-input-group'       : `${__dirname}/number-input-group`,
      'ui/middleware/page-blocker'             : `${__dirname}/page-blocker`,
      'ui/middleware/pagination'               : `${__dirname}/pagination`,
      'ui/middleware/password-input-group'     : `${__dirname}/password-input-group`,
      'ui/middleware/radio-button-input-group' : `${__dirname}/radio-button-input-group`,
      'ui/middleware/select-input-group'       : `${__dirname}/select-input-group`,
      'ui/middleware/text-input-group'         : `${__dirname}/text-input-group`,
      'ui/middleware/textarea-input-group'     : `${__dirname}/textarea-input-group`
    }
  }
}
