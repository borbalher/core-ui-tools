class Crypto
{
  constructor(crypto)
  {
    this.crypto = crypto
  }

  async exportKey(format, key)
  {
    const  exportedKey = await this.crypto.subtle.exportKey(format, key)
    return exportedKey
  }

  async generateKey(algorithm, extractable, keyUsages)
  {
    const  generatedKey = await this.crypto.subtle.generateKey(algorithm, extractable, keyUsages)
    return generatedKey
  }

  async unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages)
  {
    const  unwrappedKeys = await this.crypto.subtle.unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages)
    return unwrappedKeys
  }

  async encrypt(algorithm, key, data)
  {
    const encrypted = await this.crypto.subtle.encrypt(algorithm, key, data)
    return encrypted
  }

  async decrypt(algorithm, key, data)
  {
    const  decrypted = await this.crypto.subtle.decrypt(algorithm, key, data)
    return decrypted
  }
}

module.exports = Crypto
