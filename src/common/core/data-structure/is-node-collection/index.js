const isNode = require('../is-node')

module.exports = (array) =>
{
  if(Array.isArray(array))
  {
    const nodesInArray = array.filter((element) =>
    {
      if(isNode(element))
        return true
    })

    return nodesInArray.length === array.length
  }
  else
  {
    return false
  }
}
