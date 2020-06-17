const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * DateInputGroup composer
 * @class
 */
class DateInputGroupComposer extends ComponentComposer
{
  validate(required, value, max, min, label) // TODO add min max validation
  {
    if(required && !value)
      return `${label} is required`

    const currentDate = new Date(value)

    if(isNaN(currentDate.getTime()))
      return `${label} is not a date`

    const maxDate = new Date(max)
    if(max && currentDate.getTime() > maxDate.getTime())
      return `Date must be before ${max}`

    const minDate = new Date(min)
    if(min && currentDate.getTime() < minDate.getTime())
      return `Date must be after ${min}`
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
