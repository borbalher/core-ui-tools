const ComponentComposer = require('common/ui/aggregate/component/composer')

/**
 * TextInput composer
 * @class
 */
class InputGroupErrorComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    parentId,
    message,
    classes,
    name,
    id
  })
  {
    const error = super.compose({
      template : 'error',
      schema   : 'entity/error',
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      renderonchange,
      parentId,
      message,
      classes,
      name,
      id
    })

    return error
  }
}

module.exports = InputGroupErrorComposer
