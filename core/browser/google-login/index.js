const Component = require('..')

class GoogleLoginComponent extends Component
{
  constructor(ui, bus)
  {
    super(ui, bus)
    this.code = this.url.searchParams.get('code')

    if(this.code)
      this.bus.emit('authorization', 'create.session', { code })
  }
}

module.exports = GoogleLoginComponent
