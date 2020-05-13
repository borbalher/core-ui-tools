const NotEntityError = require('./error/not-entity')

class Normalize
{
  constructor(composer)
  {
    this.composer = composer
  }

  isEntity(json, index)
  {
    if(!json.id)
      throw new NotEntityError(`Element at index ${index} is not an entity`, json)
  }

  // jsonToEntities(json)
  // {
  //   const
  //   nodes = [],
  //   edges = []

  //   let root
  //   if(isEntity(json))
  //   {
  //     const rootNode = this.mapNode(json, nodes, edges)
  //     nodes.push(rootNode)
  //     root = rootNode.id
  //   }

  //   return { nodes, edges, isDirected: true, root }
  // }

  // mapEntity(element, nodes, edges)
  // {
  //   const
  //   { id, name } = element,
  //   keys         = Object.keys(element),
  //   node         = { id, name }

  //   for(const key of keys)
  //   {
  //     if(isNode(element[key]))
  //     {
  //       const child = this.mapNode(element[key], nodes, edges)
  //       nodes.push(child)
  //       edges.push({ source: element.id, target: child.id, payload: {} })
  //     }
  //     else
  //     {
  //       node[key] = element[key]
  //     }
  //   }

  //   return node
  // }

  normalize(json, schemaName)
  {
    // const schema = this.composer.composeSchema(schemaName)

    // let entities = {}, state = {}

    // for(const attribute in json)
    // {
    //   if(schema[attribute].type === 'schema')
    //   {
    //     const nestedSchema = json[attribute].schema.match(/entity\/(.+)/)(1)

    //   }

    // }
    //   output[attribute] = this.attribute(schemaName, schema, attribute, dto[attribute])

    // let allIds = [], byId = {}

    // for(const [index, entity] of entities.entries())
    // {
    //   allIds = [...allIds, entity.id]
    //   byId[entity.id] = entity
    // }

    // return {
    //   allIds,
    //   byId
    // }
  }
}

module.exports = Normalize
