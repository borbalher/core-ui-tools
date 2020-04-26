class PageNumberClickedMapper
{
  map(domEvent)
  {
    return {
      page : Number(domEvent.target.dataset.page)
    }
  }
}

module.exports = PageNumberClickedMapper
