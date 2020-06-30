const
Graph        = require('../graph'),
NodeNotExist = require('../graph/error/node-not-exists')

class Tree extends Graph
{
  constructor(id, nodes, edges, isDirected, queue, root, deepassign, deepfind)
  {
    super(id, nodes, edges, isDirected, queue)
    this.deepassign = deepassign
    this.deepfind   = deepfind
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

    bfs.forEach((nodeId) => // ['a', 'b' 'c', 'd']
    {
      const
      node      = this.nodes.getItem(nodeId),
      jsonPath  = this.getJSONPath(nodeId, bfs, node.name, json)

      if(flattened)
        json[jsonPath] = { ...node }
      else
        json = this.deepassign.assign(json, jsonPath, { ...node })
    })

    return json
  }

  getParent(nodeId)
  {
    for(const edge of this.edgesToLinks())
    {
      const { source, target } = edge
      if(target === nodeId)
        return source
    }
  }

  getJSONPath(nodeId, path, jsonPath, json)
  {
    // lets get the direct parent to the relevant node to beable to find relative nodes, that should be grouped as an array
    const parent  = this.getParent(nodeId)
    // fetching the node information used to compare if it's an array aor not

    // TODO cleanup, remove outcommented code if passing test
    // const previousIndex = nodeIndex - 1
    // let parent
    // for(let i = previousIndex; i >= 0; i--)
    // {
    //   const
    //   previousNodeId    = path[i],
    //   previousNodeEdges = this.edges.getItem(previousNodeId)

    //   if(previousNodeEdges)
    //   {
    //     const currentNodeEdge = previousNodeEdges.find((previousNodeEdge) =>
    //     {
    //       return previousNodeEdge.target === nodeId
    //     })

    //     if(currentNodeEdge)
    //     {
    //       parent = previousNodeId
    //       break
    //     }
    //   }
    // }

    // make unit test for tree get json (shared name for checking arrays)
    // make unit test for normalizer module (check that it adds the entities correctly)

    if(parent)
    {
      const
      node      = this.nodes.getItem(nodeId),    // lets get all the parent children
      children  = this.getAdjacentNodes(parent),
      siblings  = children.filter((child) =>    // lets check if there are shared name, then it's an array in the tree-path, if more then one
      {
        const childNode = this.nodes.getItem(child)
        return node.name === childNode.name
      }),
      parentNode  = this.nodes.getItem(parent)

      if(siblings.length > 1)
      {
        const index = siblings.findIndex((siblingId) =>
        {
          return siblingId === nodeId
        }),
        parentPath = this.getJSONPath(parent, path, `${parentNode.name}`, json)

        return `${parentPath}.${jsonPath}[${index}]`
      }
      else
      {
        const parentPath = this.getJSONPath(parent, path, `${parentNode.name}`, json)
        return `${parentPath}.${jsonPath}`
      }
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
