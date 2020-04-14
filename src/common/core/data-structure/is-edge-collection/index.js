const isEdge = require('../is-edge')

module.exports = (array) =>
{
  if(Array.isArray(array))
  {
    const edgesInArray = array.filter((element) =>
    {
      if(isEdge(element))
        return true
    })

    return edgesInArray.length === array.length
  }
  else
  {
    return false
  }
}
