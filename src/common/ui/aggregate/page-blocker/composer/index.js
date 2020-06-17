const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * PageBlocker composer
 * @class
 */
class PageBlockerComposer extends ComponentComposer
{
  compose({
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
