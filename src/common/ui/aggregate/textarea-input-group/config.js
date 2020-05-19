module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.textarea.input' : 'ui/text-input-group/action/validate-textarea-input'
      }
    },
    locator :
    {
      'ui/textarea-input-group/action/validate-textarea-input' : `${__dirname}/action/validate-input`,
      'ui/textarea-input-group/composer'                       : `${__dirname}/composer`
    }
  },
  ui :
  {
    'component' :
    {
      'textarea-input-group' :
      {
        bindings :
        {
          'validate.textarea-input.on.change' :
          {
            selector       : 'textarea',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper',
            event          : 'validate.textarea.input',
            dispatch       : true
          }
        }
      }
    }
  }
}
