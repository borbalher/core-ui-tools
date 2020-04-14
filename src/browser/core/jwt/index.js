class JWT
{
  constructor(cookies, base64, options)
  {
    this.cookies  = cookies
    this.base64   = base64
    this.options  = options
    this.jwt      = this.cookies.getCookie('JWT')
  }

  setToken(jwt)
  {
    this.jwt = jwt

    this.cookies.setCookie({
      name    : 'JWT',
      value   : this.jwt,
      expires : this.options.tokenDuration,
      path    : '/'
    })
  }

  removeToken()
  {
    this.cookies.deleteCookie({
      name : 'JWT'
    })

    this.jwt = undefined
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
