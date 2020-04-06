class PageBlockerComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create(state)
  {
    const
    { isBlocked = false } = state || {},
    pageBlocker = this.componentComposer.create({
      id : 'page-blocker',
      isBlocked
    })

    return pageBlocker
  }
}

module.exports = PageBlockerComposer
