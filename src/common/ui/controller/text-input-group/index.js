const Component = require('../component')

module.exports = ({ ...args }) =>
{
  return class extends Component({ ...args })
  {
    constructor({ ...args })
    {
      super({ ...args })

      // this.channel.on('component.rendered', (event) =>
      // {
      //   this.addOnChangeListener()
      // })
    }

    connectedCallback()
    {
      console.log('Connected')
      this.shadowRoot.querySelector('input[type="text"]').addEventListener('change', this.handleOnChange.bind(this))
    }

    disconnectedCallback()
    {
      console.log('Disconnected')
      this.shadowRoot.querySelector('input[type="text"]').removeEventListener('change', this.handleOnChange.bind(this))
    }

    addOnChangeListener()
    {
      this.shadowRoot.querySelector('input[type="text"]').addEventListener('change', this.handleOnChange.bind(this))
    }

    handleOnChange(event)
    {
      // this.validate({
      //   label,
      //   pattern,
      //   required,
      //   title,
      //   value : event.target.value,
      // })

      this.render()
      console.log(event)
    }

    validate({
      label,
      pattern,
      required,
      title,
      value,
    })
    {
      if(required && (!value || value.trim() === ''))
      {
        this.setState({
          error : this.dictionary.translate('IS_REQUIRED').replace(/##LABEL##/gi, label)
        })
      }
      else if(value && pattern)
      {
        const
        regexp = new RegExp(pattern),
        match  = regexp.exec(value)

        if(!match)
        {
          this.setState({
            error : title ? this.dictionary.translate(title) : this.dictionary.translate('INVALID_FORMAT')
          })
        }
      }
    }
  }
}
