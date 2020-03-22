module.exports = {
  core :
  {
    bus :
    {
      options  : {},
      channels :
      {
        'authorization' :
        {
          listeners :
          {
            'create.session' :
            {
              'authorization/command/create-session' : true
            }
          }
        }
      }
    },
    locator :
    {
      'authorization/command/create-session' : `${__dirname}/listener/create-session`,
      'core/authorization'                   : __dirname
    },
  },
  infrastructure :
  {
    authorization :
    {
      keyGenerationAlgorithm :
      {
        name           : 'RSA-OAEP',
        modulusLength  : 2048,
        publicExponent : new Uint8Array([0x01, 0x00, 0x01]),
        hash           :
        {
          name : 'SHA-256'
        }
      },
      keyWrappingAlgorithm :
      {
        name      : 'AES-GCM',
        tagLength : 128,
        length    : 256
      },
      dbName    : 'BROWSER_AUTH',
      dbVersion : 1
    }
  }
}
