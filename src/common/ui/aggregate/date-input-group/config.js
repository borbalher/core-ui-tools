module.exports = {
  core :
  {
    store :
    {
      middlewares : ['ui/date-input-group/middleware/date-input-group-flow']
    },
    reducer :
    {
      actions :
      {
        'validate.date.input' : 'ui/date-input-group/action/validate-date-input'
      }
    },
    locator :
    {
      'ui/date-input-group/middleware/date-input-group-flow' : `${__dirname}/middleware/date-input-group`,
      'ui/date-input-group/action/validate-date-input'       : `${__dirname}/action/validate-input`
    }
  }
}
