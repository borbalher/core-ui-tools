module.exports = {
  core :
  {
    locator :
    {
      'infrastructure/rsa-keys/repository' : __dirname
    }
  },
  infrastructure :
  {
    'rsa-keys' :
    {
      gateway :
      {
        dbName    : 'RSA-KEYS',
        dbVersion : '1'
      }
    }
  }
}
