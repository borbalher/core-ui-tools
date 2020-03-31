const Component = require('..')
class FormComponent extends Component
{
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

  reset(formId)
  {
    const formNode = this.ui.getComponentJSON(formId)

    for(const input in formNode.body)
    {
      if(formNode.body[input])
        this.emit(formNode.body[input].id, 'set.input.data', { data: formNode.body[input].value ? formNode.body[input].value : '' })
    }

    this.emit(formId, 'form.resetted', { id: formId })
  }

  submit(formId)
  {
    const formData = this.getFormData(formId)
    this.emit(formId, 'form.submitted', formData)
  }
}

module.exports = FormComponent
