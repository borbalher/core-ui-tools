class Hydrator
{
  constructor({
    render,
    html,
    hydrator,
    App
  })
  {
    this.html     = html
    this.render   = render
    this.hydrator = hydrator
    this.App      = App
  }

  hydrate()
  {
    const
    app   = document.getElementById(process.env.APP_SELECTOR),
    props = window._PROPS_ || {}

    this.hydrator(this.html`<${this.App} ...${props}/>`, app)
    // switch(process.env.HYDRATION_STRATEGY.toUpperCase())
    // {
    // case 'RENDER':
    //   this.render(this.html`<${this.App} ...${props}/>`, app, app.lastChild)
    //   return
    // default:
    //   this.hydrator(this.html`<${this.App} ...${props}/>`, app)
    //   return
    // }
  }
}

module.exports = Hydrator

