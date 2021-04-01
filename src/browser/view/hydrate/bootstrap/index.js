class HydrateBootstrap
{
  constructor({ locator })
  {
    this.locator = locator
  }

  bootstrap()
  {
    const hydrate = this.locator.locate('view/hydrate')
    hydrate.hydrate()
  }
}

module.exports = HydrateBootstrap
