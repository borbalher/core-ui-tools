const isNode = require('../is-node')

class JSONToGraph
{
  jsonToGraph(json, isDirected = false)
  {
    const
    nodes = [],
    edges = []

    if(isNode(json))
    {
      const startNode = this.mapNode(json, nodes, edges, isDirected)
      nodes.push(startNode)
    }

    return { nodes, edges, isDirected }
  }

  mapNode(element, nodes, edges, isDirected)
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
        childNode = this.mapNode(child, nodes, edges, isDirected)

        nodes.push(childNode)

        edges.push({ source: element.id, target: childNode.id, payload: {} })

        if(!this.isDirected)
          edges.push({ source: childNode.id, target: element.id, payload: {} })
      }
      else
      {
        node[key] = element[key]
      }
    }

    return node
  }
}

module.exports = JSONToGraph
