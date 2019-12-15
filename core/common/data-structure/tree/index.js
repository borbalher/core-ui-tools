const
Graph        = require('../graph'),
NodeNotExist = require('../graph/error/node-not-exists')

class Tree extends Graph
{
  constructor(composer, deepassign, root)
  {
    super(composer, true)
    this.deepassign = deepassign
    this.root       = root
  }

  setGraphFromJSON(json)
  {
    const root = super.setGraphFromJSON(json)

    if(root) this.setRoot(root.id)
  }

  setRoot(rootNodeId)
  {
    if(!this.nodes.getItem(rootNodeId))
      throw new NodeNotExist('Node does not exists')

    this.root = rootNodeId
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

  getJSON({
    node,
    flattened
  })
  {
    const start = node ? node : this.root

    if(!this.nodes.getItem(start))
      throw new NodeNotExist(`Node ${node} does not exists`)

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
