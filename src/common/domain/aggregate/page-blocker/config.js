module.exports = {
  core :
  {
    locator :
    {
      'page-blocker/command/unblock-page' : `${__dirname}/listener/unblock-page`,
      'page-blocker/command/block-page'   : `${__dirname}/listener/block-page`,
      'ui/page-blocker'                   : __dirname
    }
  }
}
