module.exports = (element) =>
{
  return (typeof element === 'object'           && element)
         && (element.hasOwnProperty('id')       && element.id)
         && (element.hasOwnProperty('name')     && element.name)
         && (element.hasOwnProperty('template') && element.template)
         && (element.hasOwnProperty('schema')   && element.schema)
}
