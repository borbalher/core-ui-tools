class JSONToComponentTree
{
  constructor(composer)
  {
    this.composer = composer
  }

  isComponent(data)
  {
    let isComponent
    try
    {
      this.composer.compose('entity/component', data)

      isComponent = true
    }
    catch(error)
    {
      isComponent = false
    }

    return isComponent
  }

  isPage(data)
  {
    let isPage
    try
    {
      this.composer.compose('entity/page', data)

      isPage = true
    }
    catch(error)
    {
      isPage = false
    }

    return isPage
  }

  convert(json)
  {
    const
    nodes = [],
    edges = []

    let root
    if(this.isPage(json))
    {
      const rootNode = this.mapNode(json, nodes, edges)
      nodes.unshift(rootNode)
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
      if(this.isComponent(element[key]))
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

module.exports = JSONToComponentTree
