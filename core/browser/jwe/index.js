class JWE
{
  constructor({
    base64,
    authorization,
    textDecoder,
    bus
  })
  {
    this.base64         = base64
    this.authorization  = authorization
    this.textDecoder    = textDecoder
    this.bus            = bus

    this.jwe            = undefined
    this.decryptedJWE   = undefined
  }

  emit(channelId, name, data)
  {
    this.bus.emit(channelId, name, data)
  }

  async setJWE(jwe)
  {
    this.jwe          = jwe
    this.decryptedJWE = await this.decryptJWE()

    this.emit('jwe', 'jwe.setted', { content: this.decryptedJWE })
  }

  async getJWT()
  {
    return this.decryptedJWE ? this.decryptedJWE.jwt : undefined
  }

  async getServerKey()
  {
    return this.decryptedJWE ? this.decryptedJWE.serverKey : undefined
  }

  strToUint8Array(str)
  {
    const
    raw       = this.base64.decode(str),
    rawLength = raw.length,
    array     = new Uint8Array(new ArrayBuffer(rawLength))

    for(let i = 0; i < rawLength; i++)
      array[i] = raw.charCodeAt(i)

    return array
  }

  getFullCipher(cipher, tag)
  {
    const fullCipher = new Uint8Array(cipher.byteLength + tag.byteLength)

    fullCipher.set(new Uint8Array(cipher), 0)
    fullCipher.set(new Uint8Array(tag), cipher.byteLength)

    return fullCipher
  }

  decryptJWE()
  {
    if(this.jwe)
    {
      const
      jweArray        = this.jwe.split('.'),
      additionalData  = this.strToUint8Array(jweArray[0]).buffer,
      cke             = this.strToUint8Array(jweArray[1]).buffer,
      iv              = this.strToUint8Array(jweArray[2]).buffer,
      ciphertext      = this.strToUint8Array(jweArray[3]).buffer,
      authTag         = this.strToUint8Array(jweArray[4]).buffer,
      encrypted       = this.getFullCipher(ciphertext, authTag)

      return new Promise((resolve, reject) =>
      {
        this.authorization.unwrapKey(cke)
          .then((key) =>
          {
            this.authorization.decrypt({
              encrypted,
              key,
              iv,
              additionalData
            })
              .then((decryptedContent) =>
              {
                const
                decryptedContentBuffer  = new Uint8Array(decryptedContent),
                decryptedContentDecoded = this.textDecoder.decode(decryptedContentBuffer),
                decryptedContentJSON    = JSON.parse(decryptedContentDecoded)
                resolve(decryptedContentJSON)
              })
          })
          .catch((error) =>
          {
            reject(error)
          })
      })
    }
  }
}

module.exports = JWE
