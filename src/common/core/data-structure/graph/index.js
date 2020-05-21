class Graph
{
  constructor(id, nodes, edges, isDirected, queue)
  {
    this.nodes             = nodes
    this.edges             = edges
    this.queue             = queue
    this.isDirected        = isDirected
    this[Symbol.for('id')] = id
  }

  reset()
  {
    this.nodes.clear()
    this.edges.clear()
  }

  totalNodes()
  {
    return this.nodes.length()
  }

  printGraph()
  {
    const edges = this.edges.toJSON()

    for(let node in edges)
    {
      let line = `${node} ->`
      for(let edge of edges[node])
        line += ` ${edge.target} (${JSON.stringify(edge.payload)})`

      console.log(line)
    }
  }

  getAdjacentNodes(nodeId)
  {
    const edges = this.edges.getItem(nodeId)
    if(edges)
      return edges.map((edge) => edge.target)

    return []
  }

  addNodes(nodes)
  {
    for(const node of nodes)
      this.addNode(node)
  }

  addNode(node)
  {
    const { id } = node
    this.nodes.setItem(id, node)
  }

  addEdges(edges)
  {
    for(const edge of edges)
      this.addEdge(edge)
  }

  addEdge({ source, target, payload })
  {
    const sourceEdge = { source, target, payload }

    if(this.edges.getElementIndex(source, sourceEdge) === -1)
      this.edges.setItem(source, sourceEdge)

    if(!this.isDirected)
    {
      const targetEdge = { source: target, target: source, payload }

      if(this.edges.getElementIndex(target, targetEdge) === -1)
        this.edges.setItem(target, targetEdge)
    }
  }

  bfs(startNodeId)
  {
    const
    visited = {},
    path    = []

    this.queue.reset()

    if(!this.nodes.getItem(startNodeId))
      return path

    visited[startNodeId] = true
    this.queue.enqueue(startNodeId)

    while(!this.queue.isEmpty())
    {
      const sourceNodeId  = this.queue.dequeue()

      path.push(sourceNodeId)

      visited[sourceNodeId] = true

      const adjacencyList = this.edges.getItem(sourceNodeId)
      if(adjacencyList)
      {
        for(let edge of adjacencyList)
        {
          const targetNodeId = edge.target

          if(!visited[targetNodeId])
            this.queue.enqueue(targetNodeId)
        }
      }
    }
    return path
  }

  dfs(startNodeId)
  {
    const
    visited = { },
    path    = []

    if(!this.nodes.getItem(startNodeId))
      return path

    this.recursiveDFS(startNodeId, visited, path)

    return path
  }

  recursiveDFS(nodeId, visited, path)
  {
    visited[nodeId] = true

    path.push(nodeId)

    const adjacencyList = this.edges.getItem(nodeId)

    if(adjacencyList)
    {
      for(let edge of adjacencyList)
      {
        const targetNodeId = edge.target
        if(!visited[targetNodeId])
          this.recursiveDFS(targetNodeId, visited, path)
      }
    }
  }

  reduceEdgeArrayToLinks(acc, nodeEdges, index)
  {
    const
    source          = this.edges.toArray().keys[index],
    edgesWithSource = nodeEdges.map((nodeEdge) =>
    {
      if(!nodeEdge.source)
        return { source, ...nodeEdge }
      else
        return nodeEdge
    })

    return acc.concat(edgesWithSource)
  }

  edgesToLinks()
  {
    const
    edgesArray = this.edges.toArray().values,
    links      = edgesArray.reduce(this.reduceEdgeArrayToLinks.bind(this), [])

    return links
  }

  serialize()
  {
    const
    nodes = this.nodes.toArray().values,
    links = this.edgesToLinks()

    return {
      nodes,
      links
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'Graph'
  }
}

module.exports = Graph
