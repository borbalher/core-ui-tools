const hasId = require('../has-id')

class JSONToTree
{
  jsonToTree(json)
  {
    const
    nodes = [],
    edges = []

    let root
    if(hasId(json))
    {
      const rootNode = this.mapNode({ ...json, name: 'root' }, nodes, edges)
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
      if(hasId(element[key]))
      {
        const
        child     = { ...element[key], name: key },
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

module.exports = JSONToTree
