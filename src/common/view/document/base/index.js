class Base
{
  constructor({ html })
  {
    this.html = html
  }

  render({
    page,
    body,
    hash,
    props = {}
  })
  {
    return this.html`
      <head>
      </head>
      <body>
        <div id="page" data-page="${page}">${body}</div>
        <div id="props">${JSON.stringify(props)}</div>

        <script type="text/javascript" src="https://kit.fontawesome.com/d7797a6589.js?${hash}" crossorigin="anonymous"></script>
        <script type="text/javascript" src="/resources/js/vendors.bundle.js?${hash}"></script>
        <script type="text/javascript" src="/resources/js/polyfills.bundle.js?${hash}"></script>
        <script type="text/javascript" src="/resources/js/${page}.bundle.js?${hash}"></script>
      </body>`

  }
}

module.exports = Base
