module.exports = {
  core :
  {
    store :
    {
      middlewares : [
        'ui/middleware/text-input-group',
        'ui/middleware/textarea-input-group',
        'ui/middleware/date-input-group',
        'ui/middleware/checkbox-input-group'
      ]
    },
    locator :
    {
      'ui/middleware/checkbox-input-group' : `${__dirname}/middleware/checkbox-input-group`,
      'ui/middleware/textarea-input-group' : `${__dirname}/middleware/textarea-input-group`,
      'ui/middleware/date-input-group'     : `${__dirname}/middleware/date-input-group`,
      'ui/middleware/text-input-group'     : `${__dirname}/middleware/text-input-group`
    }
  }
}
