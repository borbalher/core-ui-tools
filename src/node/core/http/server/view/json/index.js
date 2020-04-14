class HttpViewJson
{
  write(output, viewModel, route)
  {
    const
    replacer = (key, value) =>
    {
      if(value === undefined)
        return null

      return value
    },
    body = viewModel.meta.pretty || route.pretty
      ? JSON.stringify(viewModel.body, replacer, 2)
      : JSON.stringify(viewModel.body, replacer)

    viewModel.headers['content-type']   = 'application/json; charset=utf-8'
    viewModel.headers['content-length'] = Buffer.byteLength(body)

    output.writeHead(viewModel.meta.status || 200, viewModel.headers)
    output.end(body)
  }
}

module.exports = HttpViewJson
