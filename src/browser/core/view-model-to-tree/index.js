const isComponent = require('../is-component')

class ViewModelToTree
{
  map(viewModel)
  {
    if(isComponent(viewModel))
    {
      const
      nodes = [],
      edges = [],
      page  = this.mapComponent(viewModel, nodes, edges)

      nodes.push(page)

      return {
        nodes,
        edges,
        isDirected : true,
        root       : page.id
      }
    }
    else
    {
      return {
        nodes      : [],
        edges      : [],
        isDirected : true,
        root       : page.id
       }
    }
  }

  mapComponent(element, nodes, edges)
  {
    const
    { id, name } = element,
    keys         = Object.keys(element),
    node         = { id, name }

    for(const key of keys)
    {
      if(isComponent(element[key]))
      {
        const
        child     = element[key],
        childNode = this.mapComponent(child, nodes, edges)

        nodes.push(childNode)
        edges.push({ source: element.id, target: childNode.id, payload: {} })
      }
      else
      {
        node[key] = element[key]
      }
    }

    return node
  }
}

module.exports = ViewModelToTree
