module.exports = {
  core :
  {
    locator :
    {
      'ui/pagination/mapper/page-number-clicked'     : `${__dirname}/mapper/page-number-clicked`,
      'ui/pagination/listener/on-page-clicked'       : `${__dirname}/listener/on-page-clicked`,
      'ui/pagination/listener/on-prev-pages-clicked' : `${__dirname}/listener/on-prev-pages-clicked`,
      'ui/pagination/listener/on-next-pages-clicked' : `${__dirname}/listener/on-next-pages-clicked`,
      'ui/pagination/listener/on-prev-page-clicked'  : `${__dirname}/listener/on-prev-page-clicked`,
      'ui/pagination/listener/on-next-page-clicked'  : `${__dirname}/listener/on-next-page-clicked`,
      'ui/pagination/composer'                       : `${__dirname}/composer`,
      'ui/pagination/controller'                     : `${__dirname}/controller`
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
            event          : 'page.clicked',
            domEventMapper : 'ui/pagination/mapper/page-number-clicked'
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
            locator : 'ui/pagination/listener/on-page-clicked'
          },
          {
            event   : 'prev.pages.clicked',
            locator : 'ui/pagination/listener/on-prev-pages-clicked'
          },
          {
            event   : 'next.pages.clicked',
            locator : 'ui/pagination/listener/on-next-pages-clicked'
          },
          {
            event   : 'prev.page.clicked',
            locator : 'ui/pagination/listener/on-prev-page-clicked'
          },
          {
            event   : 'next.page.clicked',
            locator : 'ui/pagination/listener/on-next-page-clicked'
          }
        ]
      }
    }
  }
}
