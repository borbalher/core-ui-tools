const HTTPFetchError = require('./error/http-fetch-error')

class HTTPGateway
{
  constructor(baseURL, baseHeaders = {})
  {
    this.baseHeaders  = baseHeaders
    this.baseURL      = baseURL
  }

  composeURL(url, query = {})
  {
    const composedURL = new URL(`${this.baseURL}${url}`)

    for(let key in query)
      composedURL.searchParams.set(encodeURIComponent(key), encodeURIComponent(query[key]))

    return composedURL.href
  }

  composeOptions(headers, method, data)
  {
    const options = {
      method,
      headers :
      {
        ...this.baseHeaders,
        ...headers
      }
    }

    if(data)
    {
      return {
        ...options,
        body : typeof data !== 'string' ? JSON.stringify(data) : data
      }
    }
    else
    {
      return options
    }
  }

  async request({
    headers,
    method,
    query,
    data,
    url
  })
  {
    const
    options   = this.composeOptions(headers, method, data),
    endpoint  = this.composeURL(url, query),
    response  = await window.fetch(endpoint, options).catch((error) =>
    {
      throw new HTTPFetchError(`Error while trying to fetch: ${error.message}`)
    })

    return {
      status : response.status,
      data   : await response.json()
    }
  }

  async get({
    headers,
    query,
    url
  })
  {
    return this.request({
      method : 'get',
      query,
      headers,
      url
    })
  }

  async post({
    headers,
    query,
    data,
    url
  })
  {
    return this.request({
      method : 'post',
      data,
      query,
      headers,
      url
    })
  }

  async put({
    headers,
    query,
    data,
    url
  })
  {
    return this.request({
      method : 'put',
      headers,
      query,
      data,
      url
    })
  }

  async delete({
    headers,
    query,
    data,
    url
  })
  {
    return this.request({
      method : 'delete',
      headers,
      query,
      data,
      url
    })
  }
}

module.exports = HTTPGateway
