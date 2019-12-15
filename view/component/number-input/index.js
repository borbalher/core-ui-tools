const Component = require('..')

class NumberInputComponent extends Component
{
  getRegexp(inputNode)
  {
    const
    { acceptDecimals, acceptNegatives, maxDecimals }  = inputNode,
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

  getErrorMessage(inputNode)
  {
    const { acceptDecimals, acceptNegatives, maxDecimals, min, max } = inputNode

    let errorMessage = `${inputNode.label} accepts `

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

  isNumberValid(inputNode)
  {
    const
    { min, max, value } = inputNode,
    regexp = this.getRegexp(inputNode)

    if(min && Number(value) < min)
      return false
    else if(max && Number(value) > max)
      return false
    else if(regexp.exec(value) === null)
      return false

    return true
  }

  validateInput(inputId)
  {
    const inputNode = this.getComponentNode(inputId)

    if(inputNode.required && (!inputNode.value || inputNode.value.trim() === ''))
    {
      inputNode.error        = true
      inputNode.errorMessage = `${inputNode.label} is required`
    }
    else
    {
      inputNode.error        = !this.isNumberValid(inputNode)
      inputNode.errorMessage = inputNode.error ? this.getErrorMessage(inputNode) : undefined
    }

    this.emit(inputId, 'input.validated', { id: inputId, error: inputNode.error, errorMessage: inputNode.errorMessage })
    this.setComponentNode(inputId, inputNode)
  }

  setInputValue(inputId, value)
  {
    const inputNode = this.getComponentNode(inputId)
    inputNode.value = value
    this.emit(inputId, 'input.value.setted', { id: inputId, value })
    this.setComponentNode(inputId, inputNode)
  }
}

module.exports = NumberInputComponent
