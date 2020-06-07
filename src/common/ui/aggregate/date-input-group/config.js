module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.date.input' : 'ui/date-input-group/action/validate-date-input'
      }
    },
    locator :
    {
      'ui/date-input-group/action/validate-date-input' : `${__dirname}/action/validate-input`,
      'ui/date-input-group/composer'                   : `${__dirname}/composer`
    }
  }
}
