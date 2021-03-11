class StaticView
{
  write(output, viewModel)
  {
    const body = `${viewModel.body}`

    viewModel.headers['content-type']   = viewModel.meta.contentType
    viewModel.headers['content-length'] = Buffer.byteLength(body)

    output.writeHead(viewModel.meta.status || 200, viewModel.headers)
    output.end(body)
  }
}

module.exports = StaticView
