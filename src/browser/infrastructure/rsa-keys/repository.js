class RSAKeysRepository
{
  constructor(repository, crypto, jwkToPEM)
  {
    this.repository             = repository
    this.crypto                 = crypto
    this.jwkToPEM               = jwkToPEM
    this.keyGenerationAlgorithm = {
      name           : 'RSA-OAEP',
      modulusLength  : 2048,
      publicExponent : new Uint8Array([0x01, 0x00, 0x01]),
      hash           :
      {
        name : 'SHA-256'
      }
    }
  }

  async getAlgorithmWithPEMPublicKey()
  {
    const
    algorithm = this.keyGenerationAlgorithm.name,
    publicKey = await this.getPublicKeyPEM() // TODO we should work with jwk in server side, not PEM

    return {
      algorithm,
      publicKey
    }
  }


  async generateKeys()
  {
    const key = await this.crypto.generateKey(
      this.keyGenerationAlgorithm,
      true,
      ['wrapKey', 'unwrapKey']
    )

    await this.repository.setItem('PUBLIC_KEY',  key.publicKey)
    await this.repository.setItem('PRIVATE_KEY', key.privateKey)
  }

  async getKeys()
  {
    let
    publicKey   = await this.repository.getItem('PUBLIC_KEY'),
    privateKey  = await this.repository.getItem('PRIVATE_KEY')

    if(!publicKey || !privateKey)
    {
      await this.generateKeys()

      publicKey   = await this.repository.getItem('PUBLIC_KEY')
      privateKey  = await this.repository.getItem('PRIVATE_KEY')
    }

    return {
      publicKey,
      privateKey
    }
  }

  async getPublicKeyPEM()
  {
    const
    keys      = await this.getKeys(),
    publicKey = await this.crypto.exportKey('jwk', keys.publicKey)

    return this.jwkToPEM(publicKey)
  }
}

module.exports = RSAKeysRepository
