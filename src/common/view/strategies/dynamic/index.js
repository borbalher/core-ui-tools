module.exports = ({ useRef, html, useNearScreen }) =>
{
  return ({ children, isBot, force }) =>
  {
    const
    ref          = useRef(),
    isNearScreen = useNearScreen({ref})

    if (isBot || isNearScreen || force)
      return html`${children}`
    else
      return html`<div ref=${ref}/>`
  }
}