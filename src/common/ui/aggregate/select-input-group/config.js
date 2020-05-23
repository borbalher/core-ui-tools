module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.select.input' : 'ui/select-input-group/action/validate-select-input'
      }
    },
    locator :
    {
      'ui/select-input-group/action/validate-select-input' : `${__dirname}/action/validate-input`,
      'ui/select-input-group/composer'                     : `${__dirname}/composer`
    }
  }
}
