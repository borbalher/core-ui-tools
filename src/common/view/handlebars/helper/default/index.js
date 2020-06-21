class CoreHandlebarsHelperDefault
{
  create()
  {
    return function(options)
    {
      if(this.switch_break === false)
        return options.fn(this)
    }
  }
}

module.exports = CoreHandlebarsHelperDefault
