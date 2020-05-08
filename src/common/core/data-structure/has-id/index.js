module.exports = (element) =>
{
  return (typeof element === 'object'  && element) &&
         (element.hasOwnProperty('id') && element.id)
}
