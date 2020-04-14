class Cookies
{
  getCookie(cookieName)
  {
    const
    name            = `${cookieName}=`,
    decodedCookies  = decodeURIComponent(document.cookie),
    cookies         = decodedCookies.split(';')

    for(let cookie of cookies)
    {
      while(cookie.charAt(0) === ' ')
        cookie = cookie.substring(1)

      if(cookie.indexOf(name) === 0)
        return cookie.substring(name.length, cookie.length)
    }
  }

  setCookie(name, value, expires, domain, path)
  {
    let cookie = `${name}=${value}`

    if(expires)
    {
      const today = new Date()
      today.setTime(today.getTime() + expires)
      cookie += `;expires=${today.toUTCString()}`
    }

    if(domain)
      cookie += `;domain=${domain}`

    if(path)
      cookie += `;path=${path}`

    document.cookie = cookie
  }

  deleteCookie(name)
  {
    this.setCookie({
      name,
      value   : '',
      expires : -1
    })
  }
}

module.exports = Cookies
