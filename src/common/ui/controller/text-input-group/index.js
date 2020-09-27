const
Component = require('../component'),
TextInputGroup = ({ ...args }) =>
{
  return class extends Component({ ...args })
  {
    connectedCallback()
    {
      this.shadowRoot.querySelector('input[type="text"]').addEventListener('change', this.handleOnChange.bind(this))
    }

    // constructor({ ...args })
    // {
    //   super({ ...args })

    //   this.channel.on('component.rendered', (event) =>
    //   {
    //     this.addOnChangeListener()
    //   })
    // }

    addOnChangeListener()
    {
      this.node.querySelector('input[type="text"]').addEventListener('change', this.handleOnChange.bind(this))
    }

    handleOnChange(event)
    {
      this.dispatch('validate.text.input.group', { value: event.target.value })
      // const {
      //   label,
      //   pattern,
      //   required,
      //   title
      // } = this.getState()

      // this.validate({
      //   label,
      //   pattern,
      //   required,
      //   title,
      //   value : event.target.value,
      // })
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

module.exports = TextInputGroup
