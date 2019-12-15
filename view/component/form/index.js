class FormComponent
{
  constructor(dom, bus, action)
  {
    this.dom    = dom
    this.bus    = bus
    this.action = action
  }

  emit(channelId, name, data)
  {
    this.bus.emit(channelId, name, data)
  }

  getFormData(formId)
  {
    const
    formNode = this.dom.getNodeProps(formId),
    data     = formNode.data

    for(const input in formNode.body)
    {
      if(formNode.body[input].value)
        data[input] = formNode.body[input].value
    }

    return data
  }

  submit(formId)
  {
    const formData = this.getFormData(formId)

    this.action(formData)
      .then((response) =>
      {
        this.emit(formId, 'form.submitted.successfully', { response })
      })
      .catch((error) =>
      {
        this.emit(formId, 'form.submitted.error', { error })
      })

    this.emit(formId, 'form.submitted', formData)
  }
}

module.exports = FormComponent
