class JWE
{
  constructor(crypto, rsaKeys, textDecoder, base64, jwt)
  {
    this.crypto                = crypto
    this.rsaKeys               = rsaKeys
    this.textDecoder           = textDecoder
    this.base64                = base64
    this.jwt                   = jwt
    this.keyWrappingAlgorithm  = {
      name      : 'AES-GCM',
      tagLength : 128,
      length    : 256
    }
    this.jwe = undefined
  }

  getJWT()
  {
    return this.jwt.getJWT()
  }

  getServerKey()
  {
    return this.jwe ? this.jwe.serverKey : undefined
  }

  async unwrapKey(wrapped)
  {
    return this.rsaKeys.getKeys().then((keys) =>
    {
      return this.crypto.unwrapKey(
        'raw',
        wrapped,
        keys.privateKey,
        this.rsaKeys.keyGenerationAlgorithm,
        this.keyWrappingAlgorithm,
        true,
        ['encrypt', 'decrypt']
      )
    })
  }

  getFullCipher(cipher, tag)
  {
    const fullCipher = new Uint8Array(cipher.byteLength + tag.byteLength)

    fullCipher.set(new Uint8Array(cipher), 0)
    fullCipher.set(new Uint8Array(tag), cipher.byteLength)

    return fullCipher
  }

  async decrypt(jwe)
  {
    const
    jweArray                = jwe.split('.'),
    additionalData          = this.base64.toUint8Array(jweArray[0]).buffer,
    cke                     = this.base64.toUint8Array(jweArray[1]).buffer,
    iv                      = this.base64.toUint8Array(jweArray[2]).buffer,
    ciphertext              = this.base64.toUint8Array(jweArray[3]).buffer,
    authTag                 = this.base64.toUint8Array(jweArray[4]).buffer,
    encrypted               = this.getFullCipher(ciphertext, authTag),
    key                     = await this.unwrapKey(cke),
    decryptionAlgorithm     = { ...this.keyWrappingAlgorithm, iv, additionalData },
    decryptedContent        = this.crypto.decrypt(decryptionAlgorithm, key, encrypted),
    decryptedContentBuffer  = new Uint8Array(decryptedContent),
    decryptedContentDecoded = this.textDecoder.decode(decryptedContentBuffer)

    this.jwe = JSON.parse(decryptedContentDecoded)
    const { jwt } = this.jwe
    this.jwt.setJWT(jwt)
  }
}

module.exports = JWE
