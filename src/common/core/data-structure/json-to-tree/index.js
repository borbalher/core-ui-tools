const isNode = require('../is-node')

class JSONToTree
{
  jsonToTree(json)
  {
    const
    nodes = [],
    edges = []

    let root
    if(isNode(json))
    {
      const rootNode = this.mapNode(json, nodes, edges)
      nodes.push(rootNode)
      root = rootNode.id
    }

    return { nodes, edges, isDirected: true, root }
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
        const child = this.mapNode(element[key], nodes, edges)
        nodes.push(child)
        edges.push({ source: element.id, target: child.id, payload: {} })
      }
      else
      {
        node[key] = element[key]
      }
    }

    return node
  }
}

module.exports = JSONToTree
