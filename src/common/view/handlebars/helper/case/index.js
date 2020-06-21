class CoreHandlebarsHelperCase
{
  create()
  {
    return function(value, options)
    {
      if(value === this.switch_value)
      {
        this.switch_break = true
        return options.fn(this)
      }
    }
  }
}

module.exports = CoreHandlebarsHelperCase
