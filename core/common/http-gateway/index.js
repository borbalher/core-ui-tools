const
HTTPResponseError = require('./error/http-response-error'),
HTTPFetchError    = require('./error/http-fetch-error'),
fetch             = require('node-fetch')

class HTTPGateway
{
  constructor({
    baseHeaders = {},
    options     = {}
  })
  {
    this.baseHeaders  = baseHeaders
    this.options      = options
  }

  composeURL({
    endpoint,
    query    = {}
  })
  {
    const url = new URL(`${this.options.protocol}://${this.options.host}${this.options.port ? `:${this.options.port}` : ''}${this.options.basePath ? `${this.options.basePath}` : ''}${endpoint}`)

    for(let key in query)
      url.searchParams.set(key, query[key])

    return url.href
  }

  getOptions({
    method,
    body,
    headers
  })
  {
    const options = {
      method,
      headers : { ...this.baseHeaders, ...headers }
    }

    if(body)
      options.body = body // this.formatBody({ body, headers })

    return options
  }

  async checkResponse(response)
  {
    if(!response.ok)
    {
      console.log(`[${response.status}] ${response.statusText} at ${response.url}`)
      throw new HTTPResponseError(await response.text())
    }

    return response
  }

  async fetch({
    body,
    query,
    method,
    headers,
    endpoint
  })
  {
    const
    options = this.getOptions({
      body,
      method,
      headers
    }),
    url       = this.composeURL({ endpoint, query }),
    response  = await fetch(url, options)
      .catch((error) =>
      {
        throw new HTTPFetchError(`Error while trying to fetch: ${error.message}`)
      })

    return this.checkResponse(response)
  }

  async get({
    query,
    headers,
    endpoint,
    type
  })
  {
    return this.fetch({
      method : 'get',
      query,
      headers,
      endpoint,
      type
    })
  }

  async post({
    body,
    query,
    headers,
    endpoint,
    type
  })
  {
    return this.fetch({
      method : 'post',
      body,
      query,
      headers,
      endpoint,
      type
    })
  }

  async put({
    body,
    query,
    headers,
    endpoint,
    type
  })
  {
    return this.fetch({
      method : 'put',
      body,
      query,
      headers,
      endpoint,
      type
    })
  }

  async delete({
    body,
    query,
    headers,
    endpoint,
    type
  })
  {
    return this.fetch({
      method : 'delete',
      body,
      query,
      headers,
      endpoint,
      type
    })
  }
}

module.exports = HTTPGateway
