class JWT
{
  constructor({
    cookieManager,
    base64,
    options,
    bus
  })
  {
    this.cookieManager  = cookieManager
    this.base64         = base64
    this.options        = options
    this.bus            = bus
    this.jwt            = this.cookieManager.getCookie('JWT')
  }

  emit(channelId, name, data)
  {
    this.bus.emit(channelId, name, data)
  }

  setToken(jwt)
  {
    this.jwt = jwt

    this.cookieManager.setCookie({
      name    : 'JWT',
      value   : this.jwt,
      expires : this.options.tokenDuration,
      path    : '/'
    })

    this.emit('jwt', 'jwt.setted', { jwt })
  }

  getPayload()
  {
    if(this.jwt)
    {
      const
      array          = this.jwt.split('.'),
      payloadBase64  = array[1],
      payloadDecoded = this.base64.decode(payloadBase64)

      return JSON.parse(payloadDecoded)
    }
  }

  getUserInfo()
  {
    const  payload = this.getPayload()
    return payload ? payload.userInfo : undefined
  }

  getUserRoles()
  {
    const  payload = this.getPayload()
    return payload ? payload.roles : undefined
  }

  getJWT()
  {
    const  payload = this.getPayload()
    return payload ? payload.session : undefined
  }
}

module.exports = JWT
