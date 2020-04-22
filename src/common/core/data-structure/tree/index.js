const
Graph        = require('../graph'),
NodeNotExist = require('../graph/error/node-not-exists')

class Tree extends Graph
{
  constructor(object, deepassign, nodes, edges, isDirected, root)
  {
    super(object, nodes, edges, isDirected)
    this.deepassign = deepassign

    if(root) this.setRoot(root)
  }

  setRoot(root)
  {
    if(!this.nodes.getItem(root))
      throw new NodeNotExist('Node does not exists')

    this.root = root
  }

  getLeaves()
  {
    const
    nodeIdList = this.nodes.toArray().keys,
    leaves     = nodeIdList.filter((nodeId) =>
    {
      const edges = this.edges.getItem(nodeId)
      return  !edges || edges.length === 0
    })

    return leaves
  }

  getJSON(start = this.root, flattened = false)
  {
    if(!this.nodes.getItem(start))
      throw new NodeNotExist(`Node ${start} does not exists`)

    const bfs = this.bfs(start)

    let json = {}
    bfs.forEach((nodeId, nodeIndex) =>
    {
      const
      node      = this.nodes.getItem(nodeId),
      jsonPath  = this.getJSONPath(nodeId, nodeIndex, bfs, node.name)

      if(flattened)
        json[jsonPath] = { ...node }
      else
        json = this.deepassign.assign(json, jsonPath, { ...node })
    })

    return json
  }

  getParent(nodeId)
  {
    for(const edge of this.edges)
    {
      const { source, target } = edge
      if(target === nodeId)
        return source
    }
  }

  getJSONPath(nodeId, nodeIndex, path, jsonPath)
  {
    const previousIndex = nodeIndex - 1

    let parent
    for(let i = previousIndex; i >= 0; i--)
    {
      const
      previousNodeId    = path[i],
      previousNodeEdges = this.edges.getItem(previousNodeId)

      if(previousNodeEdges)
      {
        const currentNodeEdge = previousNodeEdges.find((previousNodeEdge) =>
        {
          return previousNodeEdge.target === nodeId
        })

        if(currentNodeEdge)
        {
          parent = previousNodeId
          break
        }
      }
    }

    if(parent)
    {
      const
      parentNode  = this.nodes.getItem(parent),
      parentIndex = path.findIndex((element) =>
      {
        return element === parent
      })

      return this.getJSONPath(parent, parentIndex, path, `${parentNode.name}.${jsonPath}`)
    }
    else
    {
      return jsonPath
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'Tree'
  }
}

module.exports = Tree
