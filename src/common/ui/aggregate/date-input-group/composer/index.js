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
    id,
    name,
    parentId,
    renderonchange,
    classes,
    options,
    attribute,
    title,
    value,
    required,
    disabled,
    readonly,
    label,
    error,
    big,
    optional,
    autocomplete,
    max,
    min
  })
  {
    const
    dateInputGroup = super.compose({
      template  : 'date-input-group',
      schema    : 'entity/date-input-group',
      bindings  : [...this.bindings, ...bindings],
      listeners : [...this.listeners, ...listeners],
      value     : value ? new Date(value).toISOString().split('T')[0] : undefined,
      id,
      name,
      parentId,
      renderonchange,
      classes,
      options,
      attribute,
      title,
      required,
      disabled,
      readonly,
      label,
      error,
      big,
      optional,
      autocomplete,
      max,
      min
    })

    return dateInputGroup
  }
}

module.exports = DateInputGroupComposer
