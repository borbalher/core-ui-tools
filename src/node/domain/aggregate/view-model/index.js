const PageNotFoundError = require('./error/page-not-found')

class ViewModelAggregate
{
  constructor({
    viewModels,
    pages
  })
  {
    this.viewModels  = viewModels
    this.pages       = pages
  }

  compose(page, state)
  {
    if(this.pages.indexOf(page) === -1)
      throw new PageNotFoundError(`Page "${page}" not found`)

    return this.viewModels[page].compose(state)
  }
}

module.exports = ViewModelAggregate
