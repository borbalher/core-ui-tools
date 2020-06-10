module.exports = {
  core :
  {
    store :
    {
      middlewares : ['ui/text-input-group/middleware/text-input-group-flow']
    },
    reducer :
    {
      actions :
      {
        'validate.text.input' : 'ui/text-input-group/action/validate-text-input'
      }
    },
    locator :
    {
      'ui/text-input-group/middleware/text-input-group-flow' : `${__dirname}/middleware/text-input-group`,
      'ui/text-input-group/action/validate-text-input'       : `${__dirname}/action/validate-input`
    }
  }
}
