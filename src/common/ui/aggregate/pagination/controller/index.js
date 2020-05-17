const ComponentController = require('common/ui/aggregate/component/controller')

class PaginationController extends ComponentController
{
  constructor(...args)
  {
    super(...args)

    this.paginationComposer = this.locator.locate('ui/pagination/composer')
  }

  pageClicked(page)
  {
    const
    { limit, totalElements, offset } = this.getControllerContext(),
    paginationContext = this.paginationComposer.create(limit, totalElements, page, offset)

    this.setControllerContext({
      ...this.getControllerContext(),
      ...paginationContext
    })
    this.emit('page.changed', { page })
  }

  prevPageClicked()
  {
    const { limit, totalElements, selectedPage, offset, firstPage } = this.getControllerContext()

    if(selectedPage !== firstPage)
    {
      const
      prevPage          = selectedPage - 1,
      paginationContext = this.paginationComposer.create(limit, totalElements, prevPage, offset)
      this.setControllerContext({
        ...this.getControllerContext(),
        ...paginationContext
      })
      this.emit('page.changed', { page: prevPage })
    }
  }

  nextPageClicked()
  {
    const { limit, totalElements, selectedPage, offset, lastPage } = this.getControllerContext()

    if(selectedPage !== lastPage)
    {
      const
      nextPage          = selectedPage + 1,
      paginationContext = this.paginationComposer.create(limit, totalElements, nextPage, offset)
      this.setControllerContext({
        ...this.getControllerContext(),
        ...paginationContext
      })
      this.emit('page.changed', { page: nextPage })
    }
  }

  prevPagesClicked()
  {
    const { limit, totalElements, selectedPage, offset } = this.getControllerContext()

    let newSelectedPage = selectedPage - (offset * 2)
    if(newSelectedPage < 1)
      newSelectedPage = 1


    const paginationContext = this.paginationComposer.create(limit, totalElements, newSelectedPage, offset)
    this.setControllerContext({
      ...this.getControllerContext(),
      ...paginationContext
    })
    this.emit('page.changed', { page: newSelectedPage })
  }

  nextPagesClicked()
  {
    const { limit, totalElements, selectedPage, offset, lastPage } = this.getControllerContext()

    let newSelectedPage = selectedPage + (offset * 2)
    if(newSelectedPage > lastPage)
      newSelectedPage = lastPage


    const paginationContext = this.paginationComposer.create(limit, totalElements, newSelectedPage, offset)
    this.setControllerContext({
      ...this.getControllerContext(),
      ...paginationContext
    })
    this.emit('page.changed', { page: newSelectedPage })
  }
}

module.exports = PaginationController
