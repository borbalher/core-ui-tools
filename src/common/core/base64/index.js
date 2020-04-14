class Base64
{
  constructor(base64, coreString)
  {
    this.base64     = base64
    this.coreString = coreString
  }

  toUint8Array(base64String)
  {
    const str = this.base64.decode(base64String)
    return this.coreString.convertToUint8Array(str)
  }

  decode(base64String)
  {
    return this.base64.decode(base64String)
  }

  encode(string)
  {
    return this.base64.encode(string)
  }

  encodeURI(string)
  {
    return this.base64.encodeURI(string)
  }
}

module.exports = Base64
