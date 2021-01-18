const
html           = require('htm/preact').html,
renderToString = require('preact-render-to-string')

module.exports = ({
  lang,
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
    <title>${title}</title>

    <meta charset="${charset}">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="${content}">

    <link rel="shortcut icon"     href="/assets/img/favicon.png">
    <link rel="apple-touch-icon"  href="/assets/img/apple-icon-57x57.png"     sizes="57x57">
    <link rel="apple-touch-icon"  href="/assets/img/apple-icon-60x60.png"     sizes="60x60">
    <link rel="apple-touch-icon"  href="/assets/img/apple-icon-72x72.png"     sizes="72x72">
    <link rel="apple-touch-icon"  href="/assets/img/apple-icon-76x76.png"     sizes="76x76">
    <link rel="apple-touch-icon"  href="/assets/img/apple-icon-114x114.png"   sizes="114x114">
    <link rel="apple-touch-icon"  href="/assets/img/apple-icon-120x120.png"   sizes="120x120">
    <link rel="apple-touch-icon"  href="/assets/img/apple-icon-144x144.png"   sizes="144x144">
    <link rel="apple-touch-icon"  href="/assets/img/apple-icon-152x152.png"   sizes="152x152">
    <link rel="apple-touch-icon"  href="/assets/img/apple-icon-180x180.png"   sizes="180x180">
    <link rel="icon"              href="/assets/img/android-icon-192x192.png" sizes="192x192" type="image/png">
    <link rel="icon"              href="/assets/img/favicon-32x32.png"        sizes="32x32"   type="image/png">
    <link rel="icon"              href="/assets/img/favicon-96x96.png"        sizes="96x96"   type="image/png">
    <link rel="icon"              href="/assets/img/favicon-16x16.png"        sizes="16x16"   type="image/png">

    <link rel="manifest" href="/assets/manifest.json">

    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/assets/img/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="/assets/css/app.bundle.css?${hash}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
  </head>

  <body id="${id}" class="page-wrapper">
    ${renderToString(body)}
    <script type="text/javascript" src="https://kit.fontawesome.com/d7797a6589.js?${hash}" crossorigin="anonymous"></script>
    <script type="text/javascript" src="/resources/js/vendors.bundle.js?${hash}"></script>
    <script type="text/javascript" src="/resources/js/commons.bundle.js?${hash}"></script>
    <script type="text/javascript" src="/resources/js/polyfills.bundle.js?${hash}"></script>
    <script type="text/javascript" src="/resources/js/${id}.bundle.js?${hash}"></script>
  </body>`
}