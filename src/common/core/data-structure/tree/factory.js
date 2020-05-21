const Tree = require('.')

class TreeFactory
{
  constructor(multipleAssociativeArrayFactory, associativeArrayFactory, queueFactory, composer, deepassign)
  {
    this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory
    this.associativeArrayFactory         = associativeArrayFactory
    this.queueFactory                    = queueFactory
    this.composer                        = composer
    this.deepassign                      = deepassign
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


  isValid(tree, graphSchema)
  {
    this.composer.compose(graphSchema, tree)
  }

  /**
   * @returns {Tree}
   */
  create(id, nodes = [], edges = [], root, treeSchema = 'entity/tree')
  {
    const
    isDirected = true,
    tree       = { id, nodes, edges, isDirected, root }

    this.isValid(tree, treeSchema)

    const
    nodesRepository = this.associativeArrayFactory.create(this.nodesToIterable(nodes)),
    edgesRepository = this.multipleAssociativeArrayFactory.create(this.edgesToIterable(edges)),
    queue           = this.queueFactory.create()

    return new Tree(id, nodesRepository, edgesRepository, isDirected, queue, root, this.deepassign)
  }

  get [Symbol.toStringTag]()
  {
    return 'TreeFactory'
  }
}

module.exports = TreeFactory
