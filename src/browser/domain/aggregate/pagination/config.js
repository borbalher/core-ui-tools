module.exports = {
  core :
  {
    ui :
    {
      'pagination' :
      {
        bindings :
        [
          {
            domEvent : 'click',
            selector : '.pagination__page__number',
            map      : 'page.click',
            mapper   : 'pagination/listener/page-number-clicked'
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-pages',
            map      : 'prev.pages.click'
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-pages',
            map      : 'next.pages.click'
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-page',
            map      : 'next.page.click'
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-page',
            map      : 'prev.page.click'
          }
        ],
        listeners : [
          {
            event   : 'page.click',
            locator : 'pagination/listener/page-click'
          },
          {
            event   : 'prev.pages.click',
            locator : 'pagination/listener/prev-pages-click'
          },
          {
            event   : 'next.pages.click',
            locator : 'pagination/listener/next-pages-click'
          },
          {
            event   : 'prev.page.clicked',
            locator : 'pagination/listener/prev-page-click'
          },
          {
            event   : 'next.page.click',
            locator : 'pagination/listener/next-page-click'
          }
        ]
      }
    },
    locator :
    {
      'pagination' : __dirname
    }
  }
}
