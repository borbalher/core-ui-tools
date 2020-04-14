module.exports = (element) =>
{
  return typeof element === 'object' &&
         (element.hasOwnProperty('source')  && typeof element.source  === 'string') &&
         (element.hasOwnProperty('target')  && typeof element.target  === 'string') &&
         (element.hasOwnProperty('payload') && typeof element.payload === 'object')
}
