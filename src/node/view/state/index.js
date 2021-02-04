const PageNotFoundError = require('./error/page-not-found')

class StateAggregate
{
  constructor({
    states,
    pages
  })
  {
    this.states  = states
    this.pages   = pages
  }

  async compose(page, input = {})
  {
    if(this.pages.indexOf(page) === -1)
      throw new PageNotFoundError(`Page "${page}" not found`)

    return this.states[page].compose(input)
  }
}

module.exports = StateAggregate
