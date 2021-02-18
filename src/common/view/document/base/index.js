class Base
{
  constructor({ html })
  {
    this.html = html
  }

  serializeProps({ props = {} })
  {
    return {__html: `window._PROPS_=${JSON.stringify(props)}`};
  }

  render({
    app,
    props = {},
    page,
    hash = process.env.HASH
  })
  {
    return this.html`
      <head>
      </head>
      <body>
        <div id="app" data-page=${page}>${app}</div>
        <script type="text/javascript" dangerouslySetInnerHTML=${this.serializeProps({ props })}/>
        <script type="text/javascript" src="/resources/js/vendors.bundle.js?${hash}"></script>
        <script type="text/javascript" src="/resources/js/polyfills.bundle.js?${hash}"></script>
        <script type="text/javascript" src="/resources/js/${page}.bundle.js?${hash}"></script>
      </body>`

  }
}

module.exports = Base
