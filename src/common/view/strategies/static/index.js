module.exports = ({
  useState,
  useRef,
  useEffect,
  html,
  EMPTY_HTML
}) =>
{
  return ({ children }) =>
  {
    const
    ref                 = useRef(null),
    [render, setRender] = useState(typeof window === 'undefined')

    useEffect(() =>
    {
      const
      isEmpty = ref.current.innerHTML === ''  // check if the innerHTML is empty as client side navigation need to render the component without server-side backup

      if(isEmpty)
        setRender(true)
    }, [])


    if(render)
      return html`${children}` // if we're in the server or a spa navigation, just render it

    // avoid re-render on the client
    return html`
      <div
        ref=${ref}
        suppressHydrationWarning
        dangerouslySetInnerHTML=${EMPTY_HTML}
      />`
  }
}