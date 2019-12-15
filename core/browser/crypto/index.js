class Crypto
{
  constructor(crypto)
  {
    this.crypto = crypto
  }

  async exportKey(format, key)
  {
    return new Promise((resolve, reject) =>
    {
      this.crypto.subtle
        .exportKey(
          format,
          key
        )
        .then((exportedKey) =>
        {
          resolve(exportedKey)
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }

  async generateKey(algorithm, extractable, keyUsages)
  {
    return new Promise((resolve, reject) =>
    {
      this.crypto.subtle
        .generateKey(
          algorithm,
          extractable,
          keyUsages
        )
        .then((exportedKey) =>
        {
          resolve(exportedKey)
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }

  async unwrapKey(
    format,
    wrappedKey,
    unwrappingKey,
    unwrapAlgorithm,
    unwrappedKeyAlgorithm,
    extractable,
    keyUsages
  )
  {
    return new Promise((resolve, reject) =>
    {
      this.crypto.subtle
        .unwrapKey(
          format,
          wrappedKey,
          unwrappingKey,
          unwrapAlgorithm,
          unwrappedKeyAlgorithm,
          extractable,
          keyUsages
        )
        .then((unwappedKeys) =>
        {
          resolve(unwappedKeys)
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }


  async encrypt(
    algorithm,
    key,
    data
  )
  {
    return new Promise((resolve, reject) =>
    {
      this.crypto.subtle
        .encrypt(
          algorithm,
          key,
          data
        )
        .then((encrypted) =>
        {
          resolve(encrypted)
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }

  async decrypt(
    algorithm,
    key,
    data
  )
  {
    return new Promise((resolve, reject) =>
    {
      this.crypto.subtle
        .decrypt(
          algorithm,
          key,
          data
        )
        .then((decrypted) =>
        {
          resolve(decrypted)
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }
}

module.exports = Crypto
