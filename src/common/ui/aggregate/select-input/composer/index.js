const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * SelectInput composer
 * @class
 */
class SelectInputComposer extends ComponentComposer
{
  compose({
    renderonchange,
    attribute,
    disabled,
    parentId,
    readonly,
    required,
    classes,
    items,
    title,
    value,
    name,
    id
  })
  {
    const selectInput = super.compose({
      template : 'select-input',
      schema   : 'entity/select-input',
      renderonchange,
      attribute,
      disabled,
      parentId,
      required,
      readonly,
      classes,
      items,
      title,
      value,
      name,
      id
    })

    return selectInput
  }
}

module.exports = SelectInputComposer
