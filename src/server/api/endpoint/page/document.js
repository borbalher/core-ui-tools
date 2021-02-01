const
html           = require('htm/preact').html,
renderToString = require('preact-render-to-string')

module.exports = ({
  title,
  charset = 'utf-8',
  body,
  content = 'width=device-width, initial-scale=.85',
  id = 'root',
  hash
}) =>
{
  return html`
  <head>

  </head>

  <body id="${id}" class="page-wrapper">
    ${body}
    <script type="text/javascript" src="https://kit.fontawesome.com/d7797a6589.js?${hash}" crossorigin="anonymous"></script>
    <script type="text/javascript" src="/resources/js/vendors.bundle.js?${hash}"></script>
    <script type="text/javascript" src="/resources/js/polyfills.bundle.js?${hash}"></script>
    <script type="text/javascript" src="/resources/js/${id}.bundle.js?${hash}"></script>
  </body>`
}

// <script type="text/javascript" src="/resources/js/commons.bundle.js?${hash}"></script>