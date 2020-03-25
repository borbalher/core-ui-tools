module.exports = {
  core :
  {
    locator :
    {
      'core/authorization' : __dirname
    },
  },
  infrastructure :
  {
    authorization :
    {
      dbName    : 'BROWSER_AUTH',
      dbVersion : 1
    }
  }
}
