class StoreBootstrap
{
  constructor(repository, store)
  {
    this.repository = repository
    this.store      = store
  }

  async bootstrap()
  {
    this.store.state = await this.repository.fetchState()
  }
}

module.exports = StoreBootstrap
