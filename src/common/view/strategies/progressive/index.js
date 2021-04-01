module.exports = ({
  isServer,
  html,
  useRef,
  useEffect,
  render,
  hydrate,
  useNearScreen,
  EMPTY_HTML
}) =>
{
  return ({ children }) =>
  {
    const
    ref           = useRef(null),
    isNearScreen  = useNearScreen({ ref })

    useEffect(() =>
    {
      const { current: el } = ref

      if(isNearScreen) // CLIENT: If we want to force the hydration OR the element is near screen then we hydrate the content to get the functionality ready
      {
        const action = el.hasChildNodes() ? 'hydrate' : 'render'

        switch(action)
        {
        case 'hydrate':
          hydrate(html`${children}`, el)
          break
        case 'render':
          render(html`${children}`, el)
          break
        }
      }
    },
    [children, isNearScreen])

    // SERVER: Just render the content as usual
    if(isServer)
      return html`<div ref=${ref}>${children}</div`


    // CLIENT: Avoid hydration until we say so
    // avoid re-render on the client
    return html`
      <div
        ref=${ref}
        suppressHydrationWarning
        dangerouslySetInnerHTML=${EMPTY_HTML}
      />`
  }
}