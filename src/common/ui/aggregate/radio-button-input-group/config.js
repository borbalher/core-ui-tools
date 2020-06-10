module.exports = {
  core :
  {
    store :
    {
      middlewares : ['ui/radio-button-input-group/middleware/radio-button-input-group-flow']
    },
    reducer :
    {
      actions :
      {
        'validate.radio-button.input' : 'ui/radio-button-input-group/action/validate-radio-button-input'
      }
    },
    locator :
    {
      'ui/radio-button-input-group/middleware/radio-button-input-group-flow' : `${__dirname}/middleware/radio-button-input-group`,
      'ui/radio-button-input-group/action/validate-radio-button-input'       : `${__dirname}/action/validate-input`
    }
  }
}
