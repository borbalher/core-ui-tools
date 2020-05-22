module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.password.input' : 'ui/password-input-group/action/validate-password-input'
      }
    },
    locator :
    {
      'ui/password-input-group/action/validate-password-input' : `${__dirname}/action/validate-input`
    }
  }
}
