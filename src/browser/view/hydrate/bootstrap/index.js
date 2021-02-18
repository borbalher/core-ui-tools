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
    app     = document.getElementById('app'),
    page    = app.dataset.page,
    props   = window._PROPS_

    hydrate.hydrate({
      app,
      props,
      page
    })
  }
}

module.exports = HydrateBootstrap
