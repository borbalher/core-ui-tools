module.exports = {
  core :
  {
    'component' :
    {
      'pagination' :
      {
        bindings :
        [
          {
            selector : '.pagination__page__number',
            domEvent : 'click',
            event    : 'page.clicked',
            mapper   : 'pagination/mapper/page-number-clicked'
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-pages',
            event    : 'prev.pages.clicked'
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-pages',
            event    : 'next.pages.clicked'
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-page',
            event    : 'next.page.clicked'
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-page',
            event    : 'prev.page.clicked'
          }
        ],
        listeners : [
          {
            event   : 'page.clicked',
            locator : 'pagination/listener/page-click'
          },
          {
            event   : 'prev.pages.clicked',
            locator : 'pagination/listener/prev-pages-click'
          },
          {
            event   : 'next.pages.clicked',
            locator : 'pagination/listener/next-pages-click'
          },
          {
            event   : 'prev.page.clicked',
            locator : 'pagination/listener/prev-page-click'
          },
          {
            event   : 'next.page.clicked',
            locator : 'pagination/listener/next-page-click'
          }
        ]
      }
    },
    locator :
    {
      'core/pagination/composer' : __dirname
    }
  }
}
