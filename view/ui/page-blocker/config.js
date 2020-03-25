module.exports = {
  core :
  {
    component :
    {
      'page-blocker' :
      {
        listeners : [
          {
            event   : 'block.page',
            locator : 'page-blocker/command/block-page'
          },
          {
            event   : 'unblock.page',
            locator : 'page-blocker/command/unblock-page'
          }
        ]
      }
    },
    locator :
    {
      'page-blocker/command/unblock-page' : `${__dirname}/listener/unblock-page`,
      'page-blocker/command/block-page'   : `${__dirname}/listener/block-page`,
      'ui/page-blocker'                   : __dirname
    }
  }
}
