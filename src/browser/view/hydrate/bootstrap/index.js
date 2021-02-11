class HydrateBootstrap
{
  constructor({ locator })
  {
    this.locator = locator
  }

  bootstrap()
  {
    const
    hydrate = this.locator.locate('view/hydrate'),
    page    = document.getElementById('page').dataset.page,
    props   = document.getElementById('props').innerText ? JSON.parse(document.getElementById('props').innerText) : {}

    hydrate.hydrate({
      page,
      props
    })
  }
}

module.exports = HydrateBootstrap
