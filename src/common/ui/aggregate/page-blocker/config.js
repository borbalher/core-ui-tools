module.exports = {
  core :
  {
    store :
    {
      middleware : ['ui/page-blocker/middleware/page-blocker-flow']
    },
    reducer :
    {
      actions :
      {
        'toggle.blocker' : 'ui/page-blocker/action/toggle-blocker',
        'block.page'     : 'ui/page-blocker/action/block-page',
        'unblock.page'   : 'ui/page-blocker/action/unblock-page'
      }
    },
    locator :
    {
      'ui/page-blocker/composer'                     : `${__dirname}/composer`,
      'ui/page-blocker/middleware/page-blocker-flow' : `${__dirname}/middleware/page-blocker-flow`,
      'ui/page-blocker/action/toggle-blocker'        : `${__dirname}/action/toggle-blocker`,
      'ui/page-blocker/action/unblock-page'          : `${__dirname}/action/unblock-page`,
      'ui/page-blocker/action/block-page'            : `${__dirname}/action/block-page`
    }
  }
}
