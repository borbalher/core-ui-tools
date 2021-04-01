class Base
{
  constructor({ html, App  })
  {
    this.html = html
    this.App  = App
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
    props,
    hash = process.env.HASH,
    state
  })
  {
    return this.html`
      <head>
      </head>
      <body>
        <div id="${process.env.APP_SELECTOR}">
          <${this.App} ...${props}/>
        </div>
        <script type="text/javascript" dangerouslySetInnerHTML=${this.serializeProps({ props })}/>
        <script type="text/javascript" dangerouslySetInnerHTML=${this.serializeState({ state })}/>
        <script type="text/javascript" src="/resources/js/bundle/vendors.bundle.js?${hash}"></script>
        <script type="text/javascript" src="/resources/js/bundle/polyfills.bundle.js?${hash}"></script>
        <script type="text/javascript" src="/resources/js/bundle/index.bundle.js?${hash}"></script>
      </body>
      `


  }
}

module.exports = Base
