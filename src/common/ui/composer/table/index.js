const ComponentComposer = require('common/ui/composer/component')
/**
 * Table composer
 * @class
 */
class TableComposer extends ComponentComposer
{
  hasActions(actions, panels)
  {
    if((actions && actions.length) || (panels && panels.length))
      return  true

    return false
  }

  getPanelColspan(headers, actions, panels)
  {
    let colspan = headers.length
    if(this.hasActions(actions, panels))
      colspan += 1

    return colspan
  }

  isExpandable(panels)
  {
    return panels.length > 0
  }

  compose({
    headers   = [],
    actions   = [],
    panels    = [],
    renderonchange,
    showHeaders,
    formatted,
    condensed,
    parentId,
    classes,
    name,
    rows,
    id
  })
  {
    const table = super.compose({
      schema       : 'entity/table',
      template     : 'table',
      panelColspan : this.getPanelColspan(headers, actions, panels),
      hasActions   : this.hasActions(actions, panels),
      isExpandable : this.isExpandable(panels),
      renderonchange,
      showHeaders,
      formatted,
      condensed,
      parentId,
      headers,
      actions,
      classes,
      panels,
      name,
      rows,
      id
    })

    return table
  }
}

module.exports = TableComposer
