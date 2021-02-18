  module.exports = ({ useState, useEffect }) =>
{
  let observer

  const
  isClient                       = typeof window !== 'undefined',
  hasIntersectionObserverSupport = () =>
  {
    return typeof window.IntersectionObserver !== 'undefined'
  },
  getIntersectionObserver = () => // import intersection observer polyfill only if on client and if not supported by browser
  {
    return Promise.resolve(isClient && !hasIntersectionObserverSupport() && require('intersection-observer'))
  },
  intersectionObserverOptions = // options for intersection observer in order to improve the effect
  {
    root       : null, // windows viewport will be used
    rootMargin : '200px 0px 0px 0px'
  },
  handleIntersect = (entries, observer) =>
  {
    entries
      .filter(entry => entry.isIntersecting)
      .forEach(entry =>
        {
        const {target} = entry
        target._onIntersect(observer)
      })
  },
  getObserver = () =>
  {
    return getIntersectionObserver()
      .then((_) =>
      {
        if(observer) return observer
        if(isClient) return new window.IntersectionObserver(handleIntersect, intersectionObserverOptions)
      })
  }

  return ({ ref }) =>
  {
    const [show, setShow] = useState(false)

    useEffect(() =>
    {
      const {current} = ref
      if (!current) return
      // get observer async and only when needed
      getObserver().then(observer => observer.observe(current))
      // mutate the current target to add a method to be executed when intersecting
      current._onIntersect = (observer) =>
      {
        setShow(true)
        observer.unobserve(current)
      }
      // clean observed element when unmounted
      return () =>
      {
        current._isSubscribed = false
      }
    },
    [ref])

    return show
  }
}