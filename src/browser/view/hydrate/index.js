class Hydrator
{
  constructor({
    html,
    hydrator,
    locator
  })
  {
    this.html     = html
    this.hydrator = hydrator
    this.locator  = locator
  }

  hydrate({ app, props, page })
  {
    const
    App       = this.locator.locate(`view/app`),
    Component = this.locator.locate(`view/page/${page}`)

    this.hydrator(this.html`<${App} Component=${Component} props=${props}></${App}>`, app)
  }
}

module.exports = Hydrator

