module.exports = {
  core :
  {
    // reducer :
    // {
    //   actions : // TODO
    //   {
    //     'page-clicked'       : 'ui/pagination/action/page-clicked',
    //     'prev-pages-clicked' : 'ui/pagination/action/prev-pages-clicked',
    //     'next-pages-clicked' : 'ui/pagination/action/next-pages-clicked',
    //     'prev-page-clicked'  : 'ui/pagination/action/prev-page-clicked',
    //     'next-page-clicked'  : 'ui/pagination/action/next-page-clicked'
    //   }
    // },
    locator :
    {
      'ui/pagination/mapper/page-number-clicked' : `${__dirname}/mapper/page-number-clicked`,
      // 'ui/pagination/action/page-clicked'        : `${__dirname}/action/page-clicked`,
      // 'ui/pagination/action/prev-pages-clicked'  : `${__dirname}/action/prev-pages-clicked`,
      // 'ui/pagination/action/next-pages-clicked'  : `${__dirname}/action/next-pages-clicked`,
      // 'ui/pagination/action/prev-page-clicked'   : `${__dirname}/action/prev-page-clicked`,
      // 'ui/pagination/action/next-page-clicked'   : `${__dirname}/action/next-page-clicked`,
      'ui/pagination/composer'                   : `${__dirname}/composer`
    }
  },
  ui :
  {
    'component' :
    {
      'pagination' :
      {
        bindings :
        {
          'page.clicked' :
          {
            selector       : '.pagination__page__number',
            domEvent       : 'click',
            domEventMapper : 'ui/pagination/mapper/page-number-clicked',
            event          : 'page.clicked',
            dispatch       : true
          },
          'prev.pages.clicked' :
          {
            domEvent : 'click',
            selector : '.pagination__prev-pages',
            event    : 'prev.pages.clicked',
            dispatch : true
          },
          'next.pages.clicked' :
          {
            domEvent : 'click',
            selector : '.pagination__next-pages',
            event    : 'next.pages.clicked',
            dispatch : true
          },
          'next.page.clicked' :
          {
            domEvent : 'click',
            selector : '.pagination__next-page',
            event    : 'next.page.clicked',
            dispatch : true
          },
          'prev.page.clicked' :
          {
            domEvent : 'click',
            selector : '.pagination__prev-page',
            event    : 'prev.page.clicked',
            dispatch : true
          }
        }
      }
    }
  }
}
