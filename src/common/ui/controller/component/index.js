const Component = ({
  actionComposer,
  bus,
  eventComposer,
  composer,
  hbs,
  props = {},
  schema,
  store,
  tag,
}) =>
{
  return class extends HTMLElement
  {
    constructor()
    {
      super()

      this.initialState = {}
      this.attachShadow({ mode: 'open' })
      this.state = this.mapPropsToState()
      this.render()
    }

    mapPropsToState()
    {
      const
      attributes = this.attributes,
      state      = { }

      for(const attribute of attributes)
      {
        const { name, value } = attribute
        state[name] = value
      }

      return state // composer.compose(schema, { ...state })
    }

    render()
    {
      this.template           = document.createElement('template')
      this.template.innerHTML = hbs.compilePartial(tag, this.state)
      this.shadowRoot.innerHTML = ''
      this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }

    isCustomElement(element)
    {
      return Object.getPrototypeOf(customElements.get(element.tagName.toLowerCase())).name === 'CustomElement'
    }

    updateBindings(prop, value = '')
    {
      const bindings = [...this.selectAll(`[data-bind$="${prop}"]`)]

      bindings.forEach((node) =>
      {
        const
        dataProp      = node.dataset.bind,
        bindProp      = dataProp.includes(':') ? dataProp.split(':').shift()                                    : dataProp,
        bindValue     = dataProp.includes('.') ? dataProp.split('.').slice(1).reduce((obj, p) => obj[p], value) : value,
        target        = [...this.selectAll(node.tagName)].find(el => el === node),
        isStateUpdate = dataProp.includes(':') && this.isCustomElement(target)

        if(isStateUpdate)
        {
          target.setState({ [`${bindProp}`]: bindValue })
        }
        else if(this.isArray(bindValue))
        {
          target[bindProp] = bindValue
        }
        else
        {
          const nodeName = target.nodeName ? target.nodeName.toLowerCase() : undefined

          switch(nodeName)
          {
          case 'input':
          {
            node.value = bindValue.toString()
            break
          }
          default:
          {
            node.textContent = bindValue.toString()
            break
          }
          }
        }
      })
    }

    setState(newState)
    {
      Object.entries(newState).forEach(([key, value]) =>
      {
        this.state[key] = this.isObject(this.state[key]) && this.isObject(value) ? { ...this.state[key], ...value } : value

        const
        bindKey  = this.isObject(value)  ? this.getBindKey(key, value) : key,
        bindKeys = this.isArray(bindKey) ? bindKey                     : [bindKey]

        bindKeys.forEach((key) =>
        {
          this.updateBindings(key, value)
        })
      })
    }

    getBindKey(key, obj)
    {
      return Object.keys(obj).map(k => this.isObject(obj[k]) ? `${key}.${this.getBindKey(k, obj[k])}` : `${key}.${k}`)
    }

    isArray(arr)
    {
      return Array.isArray(arr)
    }

    isObject(obj)
    {
      return Object.prototype.toString.call(obj) === '[object Object]'
    }

    select(selector)
    {
      return this.shadowRoot ? this.shadowRoot.querySelector(selector) : this.querySelector(selector)
    }

    selectAll(selector)
    {
      return this.shadowRoot ? this.shadowRoot.querySelectorAll(selector) : this.querySelectorAll(selector)
    }
  }
}


module.exports = Component
