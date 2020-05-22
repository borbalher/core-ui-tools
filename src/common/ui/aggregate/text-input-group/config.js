module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.text.input' : 'ui/text-input-group/action/validate-text-input'
      }
    },
    locator :
    {
      'ui/text-input-group/action/validate-text-input' : `${__dirname}/action/validate-input`,
      'ui/text-input-group/composer'                   : `${__dirname}/composer`
    }
  }
}
