const PageNotFoundError = require('./error/page-not-found')

class PageAggregate
{
  constructor({
    viewModelAggregate,
    entitySetFactory,
    stateAggregate,
    dictionary,
    pages
  })
  {
    this.viewModelAggregate = viewModelAggregate
    this.entitySetFactory   = entitySetFactory
    this.stateAggregate     = stateAggregate
    this.pages              = pages
    this.dictionary         = dictionary
  }

  async compose(page, input)
  {
    if(this.pages.indexOf(page) === -1)
      throw new PageNotFoundError(`Page "${page}" not found`)

    this.dictionary.setLang(input.lang)

    const
    state        = await this.stateAggregate.compose(page, {
      ...input,
      lang : this.dictionary.getLang()
    }),
    entitySet    = this.entitySetFactory.create(state.entities),
    viewModel    = this.viewModelAggregate.compose(page, state)

    entitySet.addEntityContext(`entity/${page}`, viewModel)

    return {
      viewModel,
      state : { ...state, entities: entitySet.entities }
    }
  }
}

module.exports = PageAggregate
