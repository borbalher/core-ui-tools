class UIBootstrap
{
  constructor(ui)
  {
    this.ui = ui
  }

  bootstrap()
  {
    const pageId = this.ui.tree.root

    this.ui.listenComponent(pageId)
    this.ui.bindComponent(pageId)
  }
}

module.exports = UIBootstrap
