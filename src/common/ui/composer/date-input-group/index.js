const ComponentComposer = require('common/ui/composer/component')
/**
 * DateInputGroup composer
 * @class
 */
class DateInputGroupComposer extends ComponentComposer
{
  constructor(configuration, dictionary)
  {
    super(configuration)
    this.dictionary    = dictionary
  }

  validate(required, value, max, min, label)
  {
    if(required && !value)
      return this.dictionary.translate('IS_REQUIRED').replace(/##LABEL##/gi, label)

    const currentDate = new Date(value)

    if(isNaN(currentDate.getTime()))
      return this.dictionary.translate('IS_NOT_A_DATE').replace(/##LABEL##/gi, label)

    const maxDate = new Date(max)
    if(max && currentDate.getTime() > maxDate.getTime())
      return this.dictionary.translate('DATE_MUST_BE_BEFORE').replace(/##DATE##/gi, max)

    const minDate = new Date(min)
    if(min && currentDate.getTime() < minDate.getTime())
      return this.dictionary.translate('DATE_MUST_BE_AFTER').replace(/##DATE##/gi, min)
  }

  compose({
    renderonchange,
    autocomplete,
    attribute,
    disabled,
    parentId,
    readonly,
    required,
    classes,
    options,
    label,
    title,
    value,
    name,
    big,
    max,
    min,
    id
  })
  {
    const
    dateInputGroup = super.compose({
      template : 'date-input-group',
      schema   : 'entity/date-input-group',
      value    : value ? new Date(value).toISOString().split('T')[0] : undefined,
      max      : max   ? new Date(max).toISOString().split('T')[0]   : undefined,
      min      : min   ? new Date(min).toISOString().split('T')[0]   : undefined,
      error    : process.env.PLATFORM === 'browser' ?  this.validate(required, value, max, min, label) : undefined,
      renderonchange,
      autocomplete,
      attribute,
      disabled,
      parentId,
      readonly,
      required,
      classes,
      options,
      label,
      title,
      name,
      big,
      id
    })

    return dateInputGroup
  }
}

module.exports = DateInputGroupComposer
