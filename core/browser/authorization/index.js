class Authorization
{
  constructor(authDB, crypto, jwkToPEM, repository, bus, keyGenerationAlgorithm, keyWrappingAlgorithm)
  {
    this.authDB                 = authDB
    this.crypto                 = crypto
    this.jwkToPEM               = jwkToPEM
    this.repository             = repository
    this.channel                = bus.createChannel('authorization')
    this.keyGenerationAlgorithm = keyGenerationAlgorithm
    this.keyWrappingAlgorithm   = keyWrappingAlgorithm
    // this.url                    = new URL(window.location.href)
    this.code                   = this.url.searchParams.get('code')
    // this.callback               = this.url.searchParams.get('callback')

    if(this.code)
      this.createSession()
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

  async getRequestedSession(type)
  {
    switch(type)
    {
    case 'GOOGLE':
      const
      code      = this.code,
      algorithm = this.keyGenerationAlgorithm.name,
      publicKey = await this.getPublicKeyPEM() // TODO we should work with jwk in server side, not PEM

      return {
        code,
        algorithm,
        publicKey
      }
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

  async createSession(type)
  {
    const requestedSession = await this.getRequestedSession(type)

    this.sessionCreator.createSession(requestedSession)
      .then((response) =>
      {
        this.emit('session.created.successfully', { response })
      })
      .catch((error) =>
      {
        this.emit('session.created.error', { error })
      })
  }
}

module.exports = Authorization
