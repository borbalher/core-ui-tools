module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.textarea.input' : 'ui/textarea-input-group/action/validate-textarea-input'
      }
    },
    locator :
    {
      'ui/textarea-input-group/action/validate-textarea-input' : `${__dirname}/action/validate-input`,
      'ui/textarea-input-group/composer'                       : `${__dirname}/composer`
    }
  }
}
