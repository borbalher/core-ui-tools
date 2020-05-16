const ComponentComposer = require('../component')
/**
 * PageBlocker composer
 * @class
 */
class PageBlockerComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    isBlocked,
    parentId,
    classes,
    name,
    id
  })
  {
    const pageBlocker = super.compose({
      schema   : 'entity/page-blocker',
      template : 'page-blocker',
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      renderonchange,
      isBlocked,
      parentId,
      classes,
      name,
      id
    })

    return pageBlocker
  }
}

module.exports = PageBlockerComposer
