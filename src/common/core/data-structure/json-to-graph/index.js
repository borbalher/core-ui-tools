class JSONToGraph
{
  constructor(composer, nodeSchema)
  {
    this.composer   = composer
    this.nodeSchema = nodeSchema
  }

  isNode(json)
  {
    if(json && !Array.isArray(json) && typeof json === 'object')
    {
      try
      {
        return this.composer.compose(this.nodeSchema, json)
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
    if(Array.isArray(collection))
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

    if(this.isNode(json))
    {
      const startNode = this.mapNode(json, nodes, edges, isDirected)
      nodes.unshift(startNode)
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
      if(this.isNode(element[key]))
      {
        const childNode = this.mapNode(element[key], nodes, edges, isDirected)

        nodes.push(childNode)

        edges.push({ source: element.id, target: childNode.id, payload: {} })

        if(!this.isDirected)
          edges.push({ source: childNode.id, target: element.id, payload: {} })
      }
      else if(this.isNodeCollection(element[key]))
      {
        for(const node of element[key])
        {
          const childNode = this.mapNode(node, nodes, edges, isDirected, id)

          nodes.push(childNode)

          edges.push({ source: element.id, target: childNode.id, payload: {} })

          if(!this.isDirected)
            edges.push({ source: childNode.id, target: element.id, payload: {} })
        }
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
