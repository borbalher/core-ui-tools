class Page
{
  constructor({
    locator,
    html
  })
  {
    this.html    = html
    this.locator = locator
  }

  async render({
    page,
    document,
    ...input
  })
  {
    const
    pageProps = this.locator.locate(`view/props/${page}`),
    props     = await pageProps.getProps({ ...input }),
    Page      = this.locator.locate(`view/page/${page}`),
    Document  = this.locator.locate(`view/document/${document}`)

    return Document.render({
      body : this.html`<${Page} ...${props}/>`,
      page,
      props,
      ...input
    })

  }
}

module.exports = Page
