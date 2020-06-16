module.exports = {
  core :
  {
    store :
    {
      middlewares : ['ui/number-input-group/middleware/number-input-group-flow']
    },
    reducer :
    {
      actions :
      {
        'validate.text.input' : 'ui/number-input-group/action/validate-number-input'
      }
    },
    locator :
    {
      'ui/number-input-group/middleware/number-input-group-flow' : `${__dirname}/middleware/number-input-group`,
      'ui/number-input-group/action/validate-number-input'       : `${__dirname}/action/validate-input`
    }
  }
}
