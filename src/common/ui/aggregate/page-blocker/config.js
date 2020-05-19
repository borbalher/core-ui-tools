module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'block.page'   : 'ui/page-blocker/action/block-page',
        'unblock.page' : 'ui/page-blocker/action/unblock-page'
      }
    },
    locator :
    {
      'ui/page-blocker/composer'            : `${__dirname}/composer`,
      'ui/page-blocker/action/block-page'   : `${__dirname}/action/block-page`,
      'ui/page-blocker/action/unblock-page' : `${__dirname}/action/unblock-page`
    }
  }
}
