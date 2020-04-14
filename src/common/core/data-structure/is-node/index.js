module.exports = (element) =>
{
  return typeof element === 'object' &&
    (element.hasOwnProperty('id')    && typeof element.id    === 'string') &&
    (element.hasOwnProperty('name')  && typeof element.name  === 'string')
}
