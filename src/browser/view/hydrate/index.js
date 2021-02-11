class Hydrator
{
  constructor({
    html,
    hydrate
  })
  {
    this.html    = html
    this.hydrate = hydrate
  }

  hydrate({ page, props })
  {
    const Page = this.locator.locate(page)
    this.hydrate(html`<${Page} ...${props}/>`, document.querySelector('body'))
  }
}

module.exports = Hydrator

