const HTTPFetchError = require('./error/http-fetch-error')

class HTTPGateway
{
  constructor({
    headers,
    fetch,
    url
  })
  {
    this.baseHeaders  = headers
    this.fetch        = fetch
    this.baseURL      = url
  }

  composeURL({
    query = {},
    url
  })
  {
    const composedURL = new URL(`${this.baseURL}${url}`)

    for(let key in query)
      composedURL.searchParams.set(key, query[key])

    return composedURL.href
  }

  getOptions({
    headers,
    method,
    data
  })
  {
    const options = { method, headers: { ...this.baseHeaders, ...headers } }

    if(data)
      options.data = JSON.stringify(data)

    return options
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
    requestOptions = this.getOptions({ data, method, headers }),
    requestURL     = this.composeURL({ url, query }),
    response       = await this.fetch(requestURL, requestOptions).catch((error) =>
    {
      throw new HTTPFetchError(`Error while trying to fetch: ${error.message}`)
    })

    return response
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
