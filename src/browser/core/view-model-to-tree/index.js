const isNode = require('../is-component')

class ViewModelToTree
{
  map(viewModel)
  {
    const
    nodes = [],
    edges = []

    if(isNode(viewModel))
    {
      const startNode = this.mapNode(viewModel, nodes, edges)
      nodes.push(startNode)
    }

    return { nodes, edges, isDirected: true }
  }

  mapNode(element, nodes, edges)
  {
    const
    { id, name } = element,
    keys         = Object.keys(element),
    node         = { id, name }

    for(const key of keys)
    {
      if(isNode(element[key]))
      {
        const
        child     = element[key],
        childNode = this.mapNode(child, nodes, edges)

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
