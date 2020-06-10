module.exports = {
  core :
  {
    store :
    {
      middlewares : ['ui/password-input-group/middleware/password-input-group-flow']
    },
    reducer :
    {
      actions :
      {
        'validate.password.input' : 'ui/password-input-group/action/validate-password-input'
      }
    },
    locator :
    {
      'ui/password-input-group/middleware/password-input-group-flow' : `${__dirname}/middleware/password-input-group`,
      'ui/password-input-group/action/validate-password-input'       : `${__dirname}/action/validate-input`
    }
  }
}
