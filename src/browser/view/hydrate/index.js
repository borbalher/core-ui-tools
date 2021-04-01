class Hydrator
{
  constructor({
    render,
    html,
    hydrator,
    locator
  })
  {
    this.html     = html
    this.render   = render
    this.hydrator = hydrator
    this.locator  = locator
  }

  hydrate({ app, props, page })
  {
    const
    App       = this.locator.locate(`view/app`),
    Component = this.locator.locate(`view/page/${page}`)

    this.render(this.html`<${App} Component=${Component} props=${props}></${App}>`, app, app.lastChild)
  }
}

module.exports = Hydrator

