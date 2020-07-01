class JSONToGraph
{
  constructor(composer, nodeSchema)
  {
    this.composer   = composer
    this.nodeSchema = nodeSchema
  }

  isNode(json)
  {
    if(json && !Array.isArray(json) && typeof json === 'object') // ENTITY/COMPONENT
    {
      try
      {
        this.composer.compose(this.nodeSchema, json)
        return true
      }
      catch(error)
      {
        return false
      }
    }

    return false
  }

  isNodeCollection(collection)
  {
    if(Array.isArray(collection) && collection.length)
    {
      try
      {
        collection.forEach((item) => this.composer.compose(this.nodeSchema, item))
        return true
      }
      catch(error)
      {
        return false
      }
    }

    return false
  }

  convert(json, isDirected = false)
  {
    const
    nodes = [],
    edges = []

    let root
    if(this.isNode(json))
    {
      const rootNode = this.mapNode(json, nodes, edges, isDirected)
      nodes.unshift(rootNode)
      root = rootNode.id
    }

    return { nodes, edges, isDirected: false, root }
  }

  mapNode(element, nodes, edges, isDirected, parentId)
  {
    const
    { id, name } = element,
    keys         = Object.keys(element),
    node         = { id, name }

    for(const key of keys)
    {
      if(this.isNode(element[key]))
      {
        const childNode = this.mapNode(element[key], nodes, edges, isDirected, id)

        nodes.push(childNode)

        edges.push({ source: element.id, target: childNode.id, payload: {} })
      }
      else if(this.isNodeCollection(element[key]))
      {
        for(const node of element[key])
        {
          const childNode = this.mapNode(node, nodes, edges, isDirected, id)

          nodes.push(childNode)

          edges.push({ source: element.id, target: childNode.id, payload: {} })
        }
      }
      else
      {
        node[key] = element[key]
      }
    }

    return { ...node, parentId }
  }
}

module.exports = JSONToGraph
