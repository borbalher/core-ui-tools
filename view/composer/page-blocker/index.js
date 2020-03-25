class PageBlockerComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({ isBlocked })
  {
    const pageBlocker = this.componentComposer.create({
      id     : 'page-blocker',
      schema : 'page-blocker',
      isBlocked
    })

    return pageBlocker
  }
}

module.exports = PageBlockerComposer
