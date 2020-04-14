class JSONToTree
{
  isNode(element)
  {
    return typeof element === 'object' &&
           element.hasOwnProperty('id') &&
           element.hasOwnProperty('name')
  }

  jsonToTree(json)
  {
    const
    nodes = [],
    edges = []

    let root
    if(this.isNode(json))
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
      if(this.isNode(element[key]))
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

module.exports = JSONToTree
