const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * DateInputGroup composer
 * @class
 */
class DateInputGroupComposer extends ComponentComposer
{
  compose({
    bindings  = [],
    listeners = [],
    renderonchange,
    autocomplete,
    attribute,
    disabled,
    optional,
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
      template  : 'date-input-group',
      schema    : 'entity/date-input-group',
      bindings  : [...this.bindings, ...bindings],
      listeners : [...this.listeners, ...listeners],
      value     : value ? new Date(value).toISOString().split('T')[0] : undefined,
      max       : max   ? new Date(max).toISOString().split('T')[0]   : undefined,
      min       : min   ? new Date(min).toISOString().split('T')[0]   : undefined,
      renderonchange,
      autocomplete,
      attribute,
      disabled,
      optional,
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
