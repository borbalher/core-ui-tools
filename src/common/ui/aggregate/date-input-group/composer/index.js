const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * DateInputGroup composer
 * @class
 */
class DateInputGroupComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.textInputComposer = this.locator.locate('ui/text-input/composer')
    this.coreMoment        = this.locator.locate('core/moment')
    this.errorComposer     = this.locator.locate('ui/error/composer')
  }

  compose({
    bindings  = [],
    listeners = [],
    afterDate,
    errorMessage,
    errorCode,
    renderonchange,
    autocomplete,
    attribute,
    required,
    disabled,
    readonly,
    parentId,
    classes,
    pattern,
    locale,
    title,
    label,
    value,
    name,
    big,
    id
  })
  {
    const
    error     = this.errorComposer.compose({
      id       : `${id}-error`,
      name     : 'error',
      classes  : 'input-group__error',
      parentId : id,
      message  : errorMessage,
      code     : errorCode
    }),
    textInput  = this.textInputComposer.compose({
      id             : `${id}-text-input`,
      name           : 'input',
      parentId       : id,
      renderonchange : false,
      placeholder    : this.coreMoment.getDateOnlyPlaceholder(locale),
      maxLength      : 10,
      autocomplete,
      attribute,
      disabled,
      readonly,
      required,
      pattern,
      title,
      value
    }),
    dateInputGroup = super.compose({
      template  : 'date-input-group',
      schema    : 'entity/date-input-group',
      input     : textInput,
      bindings  : [...this.bindings, ...bindings],
      listeners : [...this.listeners, ...listeners],
      renderonchange,
      afterDate,
      parentId,
      classes,
      locale,
      value,
      error,
      label,
      name,
      big,
      id
    })

    return dateInputGroup
  }
}

module.exports = DateInputGroupComposer
