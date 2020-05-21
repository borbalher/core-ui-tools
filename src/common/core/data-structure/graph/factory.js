const Graph = require('.')

class GraphFactory
{
  constructor(multipleAssociativeArrayFactory, associativeArrayFactory, queueFactory, composer)
  {
    this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory
    this.associativeArrayFactory         = associativeArrayFactory
    this.queueFactory                    = queueFactory
    this.composer                        = composer
  }

  nodesToIterable(nodes)
  {
    return nodes.map((node) =>
    {
      return [node.id, node]
    })
  }

  edgesToIterable(edges)
  {
    const edgesMap = new Map()
    for(const edge of edges)
    {
      if(!edgesMap.get(edge.source))
        edgesMap.set(edge.source, [])

      edgesMap.set(edge.source, [...edgesMap.get(edge.source), edge])
    }

    const iterator = edgesMap[Symbol.iterator]()

    let iterable = []
    for(let edge of iterator)
      iterable = [...iterable, edge]

    return iterable
  }

  isValid(graph, graphSchema)
  {
    this.composer.compose(graphSchema, graph)
  }

  /**
   * @returns {Graph}
   */
  create(id, nodes = [], edges = [], isDirected = false, graphSchema = 'entity/graph')
  {
    const graph = { id, nodes, edges, isDirected }

    this.isValid(graph, graphSchema)

    const
    nodesRepository = this.associativeArrayFactory.create(this.nodesToIterable(nodes)),
    edgesRepository = this.multipleAssociativeArrayFactory.create(this.edgesToIterable(edges)),
    queue           = this.queueFactory.create()

    return new Graph(id, nodesRepository, edgesRepository, isDirected, queue)
  }

  get [Symbol.toStringTag]()
  {
    return 'GraphFactory'
  }
}

module.exports = GraphFactory
