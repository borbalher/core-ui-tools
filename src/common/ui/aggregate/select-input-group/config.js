module.exports = {
  core :
  {
    store :
    {
      middlewares : ['ui/select-input-group/middleware/select-input-group-flow']
    },
    reducer :
    {
      actions :
      {
        'validate.select.input' : 'ui/select-input-group/action/validate-select-input'
      }
    },
    locator :
    {
      'ui/select-input-group/middleware/select-input-group-flow' : `${__dirname}/middleware/select-input-group`,
      'ui/select-input-group/action/validate-select-input'       : `${__dirname}/action/validate-input`
    }
  }
}
