module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'validate.radio.button.input' : 'ui/radio-button-input-group/action/validate-radio-button-input'
      }
    },
    locator :
    {
      'ui/radio-button-input-group/action/validate-radio-button-input' : `${__dirname}/action/validate-input`,
      'ui/radio-button-input-group/composer'                           : `${__dirname}/composer`
    }
  },
  ui :
  {
    'component' :
    {
      'radio-button-input-group' :
      [
        {
          selector       : 'input[type="radio"]',
          domEvent       : 'change',
          domEventMapper : 'ui/input/mapper/input-data-mapper',
          event          : 'validate.radio.button.input',
          dispatch       : true
        }
      ]
    }
  }
}
