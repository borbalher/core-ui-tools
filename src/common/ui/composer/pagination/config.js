module.exports = {
  core :
  {
    locator :
    {
      'ui/pagination/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'pagination' :
      {
        bindings :
        [
          {
            selector       : '.pagination__page__number',
            domEvent       : 'click',
            domEventMapper : 'ui/pagination/mapper/page-number-clicked',
            event          : 'page.clicked',
            dispatch       : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-pages',
            event    : 'prev.pages.clicked',
            dispatch : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-pages',
            event    : 'next.pages.clicked',
            dispatch : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-page',
            event    : 'next.page.clicked',
            dispatch : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-page',
            event    : 'prev.page.clicked',
            dispatch : true
          }
        ]

      }
    }
  }
}
