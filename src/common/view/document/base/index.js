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

  serializeState({ state = {} })
  {
    return {__html: `window._STATE_=${JSON.stringify(state)}`};
  }

  render({
    app,
    props,
    page,
    hash = process.env.HASH,
    state
  })
  {
    return this.html`
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML=${this.serializeProps({ props })}/>
        <script type="text/javascript" dangerouslySetInnerHTML=${this.serializeState({ state })}/>
        <script type="text/javascript" src="/resources/js/vendors.bundle.js?${hash}"></script>
        <script type="text/javascript" src="/resources/js/polyfills.bundle.js?${hash}"></script>
        <script type="text/javascript" src="/resources/js/${page}.bundle.js?${hash}"></script>
      </head>
      <body>
        <div id="app" data-page=${page}>${app}</div>
      </body>
      `


  }
}

module.exports = Base
