/**
 * @memberof Infrastructure
 * @extends {Error}
 */
class PageNotFound extends Error
{
  constructor(message, ...args)
  {
    super(message, ...args)
    this.code = 'E_PAGE_NOT_FOUND'
  }
}

module.exports = PageNotFound
