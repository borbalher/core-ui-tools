class HTTPViewPreact
{
  constructor({
    renderToString,
    html
  })
  {
    this.html           = html
    this.renderToString = renderToString
  }

  write(output, viewModel)
  {
    const body = `<!DOCTYPE html><html lang="${viewModel.meta.lang}">${this.renderToString(viewModel.body)}</html>`
    output.writeHead(viewModel.meta.status || 200, viewModel.headers)
    output.end(body)
  }
}

module.exports = HTTPViewPreact
