module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'page-clicked'       : 'ui/pagination/action/page-clicked',
        'prev-pages-clicked' : 'ui/pagination/action/prev-pages-clicked',
        'next-pages-clicked' : 'ui/pagination/action/next-pages-clicked',
        'prev-page-clicked'  : 'ui/pagination/action/prev-page-clicked',
        'next-page-clicked'  : 'ui/pagination/action/next-page-clicked'
      }
    },
    locator :
    {
      'ui/pagination/mapper/page-number-clicked' : `${__dirname}/mapper/page-number-clicked`,
      'ui/pagination/action/page-clicked'        : `${__dirname}/action/page-clicked`,
      'ui/pagination/action/prev-pages-clicked'  : `${__dirname}/action/prev-pages-clicked`,
      'ui/pagination/action/next-pages-clicked'  : `${__dirname}/action/next-pages-clicked`,
      'ui/pagination/action/prev-page-clicked'   : `${__dirname}/action/prev-page-clicked`,
      'ui/pagination/action/next-page-clicked'   : `${__dirname}/action/next-page-clicked`
    }
  }
}
