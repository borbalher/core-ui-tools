class PageBlockerComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({ isBlocked })
  {
    const pageBlocker = this.componentComposer.create({
      id     : 'pageBlocker',
      schema : 'page-blocker',
      isBlocked
    })

    return pageBlocker
  }
}

module.exports = PageBlockerComposer
