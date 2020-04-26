class PageNumberClickedMapper
{
  map(domEvent)
  {
    return {
      page : domEvent.target.dataset.page
    }
  }
}

module.exports = PageNumberClickedMapper
