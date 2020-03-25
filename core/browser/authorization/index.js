class Authorization
{
  constructor(authDB, crypto, jwkToPEM, channel)
  {
    this.authDB                 = authDB
    this.crypto                 = crypto
    this.jwkToPEM               = jwkToPEM
    this.channel                = channel
    this.keyGenerationAlgorithm = {
      name           : 'RSA-OAEP',
      modulusLength  : 2048,
      publicExponent : new Uint8Array([0x01, 0x00, 0x01]),
      hash           :
      {
        name : 'SHA-256'
      }
    }
    this.keyWrappingAlgorithm = {
      name      : 'AES-GCM',
      tagLength : 128,
      length    : 256
    }
  }

  emit(name, data)
  {
    this.channel.emit(name, data)
  }

  async generateAuthKeys()
  {
    const key = await this.crypto.generateKey(
      this.keyGenerationAlgorithm,
      true,
      ['wrapKey', 'unwrapKey']
    )

    await this.authDB.setItem('PUBLIC_KEY',  key.publicKey  ? key.publicKey  : key)
    await this.authDB.setItem('PRIVATE_KEY', key.privateKey ? key.privateKey : key)

    this.emit('auth.keys.generated', { key })
  }

  async getAuthKeys()
  {
    let
    publicKey   = await this.authDB.getItem('PUBLIC_KEY'),
    privateKey  = await this.authDB.getItem('PRIVATE_KEY')

    if(!publicKey || !privateKey)
    {
      await this.generateAuthKeys()

      publicKey   = await this.authDB.getItem('PUBLIC_KEY')
      privateKey  = await this.authDB.getItem('PRIVATE_KEY')
    }

    return {
      publicKey,
      privateKey
    }
  }

  async getPublicKeyPEM()
  {
    const publicKey = await this.getAuthKeys()
      .then((keys) =>
      {
        return this.crypto.exportKey('jwk', keys.publicKey)
      })

    return this.jwkToPEM(publicKey)
  }

  async getSessionInfo()
  {
    const
    algorithm = this.keyGenerationAlgorithm.name,
    publicKey = await this.getPublicKeyPEM() // TODO we should work with jwk in server side, not PEM

    return {
      algorithm,
      public_key : publicKey
    }
  }

  async unwrapKey(wrapped)
  {
    return this.getAuthKeys().then((keys) =>
    {
      return this.crypto.unwrapKey(
        'raw',
        wrapped,
        keys.privateKey,
        this.keyGenerationAlgorithm,
        this.keyWrappingAlgorithm,
        true,
        ['encrypt', 'decrypt']
      )
    })
  }

  async decrypt({
    encrypted,
    key,
    ...args
  })
  {
    return new Promise((resolve, reject) =>
    {
      this.crypto.decrypt(
        {
          ...this.keyWrappingAlgorithm,
          ...args
        },
        key,
        encrypted
      )
        .then((decrypted) =>
        {
          resolve(decrypted)
        })
        .catch((err) =>
        {
          reject(err)
        })
    })
  }
}

module.exports = Authorization
