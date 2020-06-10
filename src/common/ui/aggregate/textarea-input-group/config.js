module.exports = {
  core :
  {
    store :
    {
      middlewares : ['ui/textarea-input-group/middleware/textarea-input-group-flow']
    },
    reducer :
    {
      actions :
      {
        'validate.textarea.input' : 'ui/textarea-input-group/action/validate-textarea-input'
      }
    },
    locator :
    {
      'ui/textarea-input-group/middleware/textarea-input-group-flow' : `${__dirname}/middleware/textarea-input-group`,
      'ui/textarea-input-group/action/validate-textarea-input'       : `${__dirname}/action/validate-input`
    }
  }
}
