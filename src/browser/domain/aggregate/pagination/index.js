const Component = require('../component')

class PaginationComponent extends Component
{
  constructor(...args)
  {
    super(...args)

    this.paginationComposer = this.locator.locate('composer/pagination')
  }

  pageClick(page)
  {
    const
    { limit, totalElements, offset } = this.getComponentContext(),
    paginationContext = this.paginationComposer.create(limit, totalElements, page, offset)

    this.setComponentContext(paginationContext)
    this.emit('page.clicked', { page })
  }

  prevPageClick()
  {
    const { limit, totalElements, selectedPage, offset, firstPage} = this.getComponentContext()

    if(selectedPage !== firstPage)
    {
      const
      prevPage          = selectedPage - 1,
      paginationContext = this.paginationComposer.create(limit, totalElements, prevPage, offset)
      this.setComponentContext(paginationContext)
      this.emit('prev.page.clicked', { page: prevPage })
    }
  }

  nextPageClick()
  {
    const { limit, totalElements, selectedPage, offset, lastPage } = this.getComponentContext()

    if(selectedPage !== lastPage)
    {
      const
      nextPage          = selectedPage + 1,
      paginationContext = this.paginationComposer.create(limit, totalElements, nextPage, offset)
      this.setComponentContext(paginationContext)
      this.emit('next.page.clicked', { page: nextPage })
    }
  }

  prevPagesClick()
  {
    const { limit, totalElements, selectedPage, offset } = this.getComponentContext()

    let newSelectedPage = selectedPage - (offset * 2)
    if(newSelectedPage < 1)
      newSelectedPage = 1


    const paginationContext = this.paginationComposer.create(limit, totalElements, newSelectedPage, offset)
    this.setComponentContext(paginationContext)
    this.emit('next.pages.clicked', { page: newSelectedPage })
  }

  nextPagesClick()
  {
    const { limit, totalElements, selectedPage, offset, lastPage } = this.getComponentContext()

    let newSelectedPage = selectedPage + (offset * 2)
    if(newSelectedPage > lastPage)
      newSelectedPage = lastPage


    const paginationContext = this.paginationComposer.create(limit, totalElements, newSelectedPage, offset)
    this.setComponentContext(paginationContext)
    this.emit('prev.pages.clicked', { page: newSelectedPage })
  }
}

module.exports = PaginationComponent
