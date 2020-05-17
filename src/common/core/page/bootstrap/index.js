class PageBootstrap
{
  constructor(page)
  {
    this.page = page
  }

  bootstrap()
  {
    this.page.bootstrap()
  }
}

module.exports = PageBootstrap
