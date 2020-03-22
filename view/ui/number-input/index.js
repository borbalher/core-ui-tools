const Component = require('..')

class NumberInputComponent extends Component
{
  getRegexp(numberInput)
  {
    const
    { acceptDecimals, acceptNegatives, maxDecimals }  = numberInput,
    negativeRegexp                                    = this.getNegativeSignRegexp(acceptNegatives),
    decimalsRegexp                                    = this.getDecimalsRegexp(acceptDecimals, maxDecimals),
    regexpStr                                         = `^${negativeRegexp}\\d+${decimalsRegexp}$`

    return new RegExp(regexpStr)
  }

  getDecimalsRegexp(acceptDecimals, maxDecimals)
  {
    if(acceptDecimals)
      return `(\\.\\d{0,${maxDecimals ? maxDecimals : ''}})?`

    return ''
  }

  getNegativeSignRegexp(acceptNegatives)
  {
    if(acceptNegatives)
      return '-?'

    return ''
  }

  getErrorMessage(numberInput)
  {
    const { acceptDecimals, acceptNegatives, maxDecimals, min, max } = numberInput

    let errorMessage = `${numberInput.label} accepts `

    if(acceptDecimals && maxDecimals && acceptNegatives && min && max)
      errorMessage += `decimal numbers up to ${maxDecimals} decimal places between ${min} and ${max}`
    else if(acceptDecimals && maxDecimals && acceptNegatives && min)
      errorMessage += `decimal numbers up to ${maxDecimals} decimal places greater than ${min}`
    else if(acceptDecimals && maxDecimals && acceptNegatives && max)
      errorMessage += `decimal numbers up to ${maxDecimals} decimal places lesser than ${max}`
    else if(acceptDecimals && maxDecimals && acceptNegatives)
      errorMessage += `decimal numbers up to ${maxDecimals} decimal places`
    else if(acceptDecimals && acceptNegatives)
      errorMessage += `decimal numbers`
    else if(acceptDecimals && maxDecimals && !acceptNegatives && min && max)
      errorMessage += `positive decimal numbers up to ${maxDecimals} decimal places between ${min} and ${max}`
    else if(acceptDecimals && maxDecimals && !acceptNegatives && min)
      errorMessage += `positive decimal numbers up to ${maxDecimals} decimal places greater than ${min}`
    else if(acceptDecimals && maxDecimals && !acceptNegatives && max)
      errorMessage += `positive decimal numbers up to ${maxDecimals} decimal places lesser than ${max}`
    else if(acceptDecimals && maxDecimals && !acceptNegatives)
      errorMessage += `positive decimal numbers up to ${maxDecimals} decimal places`
    else if(acceptDecimals && !acceptNegatives)
      errorMessage += `positive decimal numbers`
    else if(!acceptDecimals && acceptNegatives && min && max)
      errorMessage += `integer numbers between ${min} and ${max}`
    else if(!acceptDecimals && acceptNegatives && min)
      errorMessage += `integer numbers greater than ${min}`
    else if(!acceptDecimals && acceptNegatives && max)
      errorMessage += `integer numbers lesser than ${max}`
    else if(!acceptDecimals && acceptNegatives)
      errorMessage += `integer numbers`
    else if(!acceptDecimals && !acceptNegatives)
      errorMessage += `natural numbers`

    return errorMessage
  }

  isNumberValid(numberInput)
  {
    const
    { min, max, value } = numberInput,
    regexp = this.getRegexp(numberInput)

    if(min && Number(value) < min)
      return false
    else if(max && Number(value) > max)
      return false
    else if(regexp.exec(value) === null)
      return false

    return true
  }

  validateInputData(numberInputId)
  {
    const numberInput = this.getComponent(numberInputId)

    if(numberInput.required && (!numberInput.value || numberInput.value.trim() === ''))
    {
      numberInput.error        = true
      numberInput.errorMessage = `${numberInput.label} is required`
    }
    else
    {
      numberInput.error        = !this.isNumberValid(numberInput)
      numberInput.errorMessage = numberInput.error ? this.getErrorMessage(numberInput) : undefined
    }

    this.emit(numberInputId, 'input.data.validated', { id: numberInputId, error: numberInput.error, errorMessage: numberInput.errorMessage })
    this.setComponent(numberInputId, numberInput)
  }

  setInputData(numberInputId, data)
  {
    const numberInput = this.getComponent(numberInputId)
    numberInput.data  = data
    this.emit(numberInputId, 'input.data.setted', { id: numberInputId, data })
    this.setComponent(numberInputId, numberInput)
  }
}

module.exports = NumberInputComponent
