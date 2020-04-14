module.exports = {
  core :
  {
    jwt :
    {
      tokenDuration : 31 * 24 * 60 * 60 * 1000 // 31 days to milliseconds
    },
    locator :
    {
      'core/jwt' : __dirname
    }
  }
}
