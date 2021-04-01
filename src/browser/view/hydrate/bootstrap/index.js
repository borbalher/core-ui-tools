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
    body    = document.querySelector('body'),
    page    = app.dataset.page,
    props   = window._PROPS_ || {}

    hydrate.hydrate({
      app,
      body,
      page,
      props
    })
  }
}

module.exports = HydrateBootstrap
