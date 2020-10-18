class Preact
{
  constructor({ components })
  {
    this.factory = {}

    for(const [component, componentPath] of Object.entries(components))
      this.factory[component] = require(componentPath).render
  }

  compileComponent({ component, props })
  {
    return this.factory[component].create({}).render(props)
  }

  write(output, viewModel, route)
  {
    const component = viewModel.component || route.component

    if(!component)
      throw new Error('view can not be rendered, no component defined')

    const body = this.compileComponent({ component, props: viewModel.body })

    viewModel.headers['Content-Length'] = Buffer.byteLength(body)

    output.writeHead(viewModel.meta.status || 200, viewModel.headers)
    output.end(body)
  }
}

module.exports = Preact
