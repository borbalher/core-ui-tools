const isComponent = require('../is-component')

module.exports = (array) =>
{
  if(Array.isArray(array))
  {
    const componentsInArray = array.filter((element) =>
    {
      if(isComponent(element))
        return true
    })

    return componentsInArray.length === array.length
  }
  else
  {
    return false
  }
}
