module.exports = {
  core :
  {
    store :
    {
      middlewares : ['ui/checkbox-input-group/middleware/checkbox-input-group-flow']
    },
    reducer :
    {
      actions :
      {
        'validate.checkbox.input' : 'ui/checkbox-input-group/action/validate-checkbox-input'
      }
    },
    locator :
    {

      'ui/checkbox-input-group/mapper/input-data-mapper'             : `${__dirname}/mapper/input-data-mapper`,
      'ui/checkbox-input-group/middleware/checkbox-input-group-flow' : `${__dirname}/middleware/checkbox-input-group`,
      'ui/checkbox-input-group/action/validate-checkbox-input'       : `${__dirname}/action/validate-input`
    }
  }
}
