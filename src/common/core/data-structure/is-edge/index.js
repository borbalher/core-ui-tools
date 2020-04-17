module.exports = (element) =>
{
  return (typeof element === 'object' && element) &&
         (element.hasOwnProperty('source') && element.source) &&
         (element.hasOwnProperty('target') && element.target) &&
         element.hasOwnProperty('payload')
}
