const Component = require('..')

class DateInputComponent extends Component
{
  constructor(dom, bus, moment)
  {
    super(dom, bus)
    this.moment = moment
  }

  validateInputData(dateInputId)
  {
    const
    dateInput                        = this.getComponent(dateInputId),
    { required, data, placeholder }  = dateInput

    if(required && (!data || data.trim() === ''))
    {
      dateInput.error        = true
      dateInput.errorMessage = `${dateInput.label} is required`
    }
    else if(data)
    {
      dateInput.error        = !this.moment.isDateValid(data, placeholder)
      dateInput.errorMessage = dateInput.error ? `${dateInput.label} must be in ${placeholder} format` : undefined
    }
    else
    {
      dateInput.error        = false
      dateInput.errorMessage = undefined
    }

    this.emit(dateInputId, 'input.data.validated', { id: dateInputId, error: dateInput.error, errorMessage: dateInput.errorMessage })
    this.setComponent(dateInputId, dateInput)
  }

  setInputData(dateInputId, data)
  {
    const dateInput = this.getComponent(dateInputId)
    dateInput.data  = data

    this.emit(dateInputId, 'input.data.setted', { id: dateInputId, data })
    this.setComponent(dateInputId, dateInput)
  }
}

module.exports = DateInputComponent
