const Component = require('..')
class FormComponent extends Component
{
  constructor(ui, bus, action)
  {
    super(ui, bus)
    this.action = action
  }

  getFormData(formId)
  {
    const
    formNode = this.ui.getComponentJSON(formId),
    data     = formNode.data

    for(const input in formNode.body)
    {
      if(formNode.body[input].data)
        data[input] = formNode.body[input].data
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
