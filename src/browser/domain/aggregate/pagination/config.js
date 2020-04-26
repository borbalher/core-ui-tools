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
            mapper   : 'pagination/mapper/page-number-clicked'
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
            event   : 'prev.page.click',
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
      'pagination/mapper/page-number-clicked' : `${__dirname}/mapper/page-number-clicked`,
      'pagination/listener/page-click'        : `${__dirname}/listener/page-click`,
      'pagination/listener/prev-pages-click'  : `${__dirname}/listener/prev-pages-click`,
      'pagination/listener/next-pages-click'  : `${__dirname}/listener/next-pages-click`,
      'pagination/listener/prev-page-click'   : `${__dirname}/listener/prev-page-click`,
      'pagination/listener/next-page-click'   : `${__dirname}/listener/next-page-click`,
      'pagination'                            : __dirname
    }
  }
}
